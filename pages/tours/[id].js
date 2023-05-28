'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Share from '../../components/Share';

import langEn from '../../lang/en/lang.json';
import langTr from '../../lang/tr/lang.json';
import placesEn from '../../lang/en/places.json';
import placesTr from '../../lang/tr/places.json';
import dynamic from 'next/dynamic'


const Pano = dynamic(
  () => import('../../components/Pano'),
  { ssr: false }
)

export default function Place({ place, lang }) {
    const { asPath, locale } = useRouter();
    const [yaw, setYaw] = React.useState(0);
    const [pitch, setPitch] = React.useState(0);

    const [hasWindow, setHasWindow] = React.useState(false);

    return (
        <>
            <Head>
                <meta
                    property='og:title'
                
                    key='ogtitle'
                />
                <meta
                    property='og:description'
            
                    key='ogdesc'
                />
                <title>
             
                </title>
            </Head>
            <div className='flex flex-row justify-between mx-8 pb-1 text-center'>
                <Link href='/'>
                    <button
                        type='button'
                        className='text-xl bg-red-700 hover:bg-red-900 text-white p-2 rounded inline-flex items-center focus:outline-none'
                    >
                        <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                            className='w-6 h-6'
                        >
                            <path d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z' />
                        </svg>
                        <span className='font-medium'>{lang.back}</span>
                    </button>
                </Link>


            </div>

            <div className='flex h-56 bg-white shadow overflow-hidden rounded-lg mx-8'>
            
         
      

   {typeof window !== 'undefined' && (
<>
<div class="bg-gray-200 p-4">

  
  <iframe width={'500px'}><Pano /></iframe>
  
</div>
<video className='float-right ml-4 my-2 h-32' controls src={"../../1.mp4"} style={{ width: "200px", height:"150px" }} />
</>
   )} 
           

               
       
            </div>
        </>
    );
}

export async function getStaticPaths() {
    let places = placesEn;

    let placePaths = [];
    places.forEach(place => {
        placePaths.push({ params: { id: String(place.id) }, locale: 'tr' });
        placePaths.push({ params: { id: String(place.id) }, locale: 'en' });
    });

    return {
        paths: placePaths,
        fallback: false
    };
}

export async function getStaticProps({ locale, params }) {
    let places = locale === 'tr' ? placesTr : placesEn;
    let lang = locale === 'tr' ? langTr.place : langEn.place;

    let place = places.filter(place => String(place.id) === String(params.id))[0];

    places = [...places].sort((a, b) => a.name.localeCompare(b.name));
    return {
        props: {
            place,
            lang
        }
    };
}
