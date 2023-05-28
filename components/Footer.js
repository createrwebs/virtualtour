import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import langEn from '../lang/en/lang.json';
import langTr from '../lang/tr/lang.json';

export default function Footer() {
  const router = useRouter();

  let lang = router.locale === 'tr' ? langTr.footer : langEn.footer;

  const [language, setLanguage] = useState(router.locale);

  return (
    <footer className='flex flex-col items-center bg-gray-400 text-black text-center'>
      <div className='mt-2 mb-1 text-sm sm:text-base'>
        <Link href='/'>
          <a className='inline-block p-1 rounded-md border-solid border-2 border-gray-700 hover:text-gray-700 hover:bg-gray-200'>
            {lang.homepage}
          </a>
        </Link>
        <Link href='/about'>
          <a className='inline-block ml-1 sm:ml-2 p-1 rounded-md border-solid border-2 border-gray-700 hover:text-gray-700 hover:bg-gray-200'>
            {lang.about}
          </a>
        </Link>
        <Link href='/support'>
          <a
            href='https://www.patreon.com/lagezla'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block ml-1 sm:ml-2 p-1 rounded-md border-solid border-2 border-gray-700 hover:text-gray-700 hover:bg-gray-200'
          >
            {lang.support}
          </a>
        </Link>
        <Link href='/terms'>
          <a className='inline-block ml-1 sm:ml-2 p-1 rounded-md border-solid border-2 border-gray-700 hover:text-gray-700 hover:bg-gray-200'>
            {lang.terms}
          </a>
        </Link>
      </div>
      <div className='mt-1 sm:mt-0 mb-1 flex'>
       
      </div>
      <div className='mt-5 mb-2 sm:my-2'>
  
      </div>

      <div className='absolute right-0 pt-16 pr-2 text-gray-600 focus-within:text-gray-400'>
        {/* <select
          name='language'
          className='form-select py-1 text-xs sm:text-base bg-gray-100 rounded-md focus:outline-none focus:bg-gray-200 focus:text-gray-900'
          aria-label={lang.language}
          value={language}
          onChange={e => {
            router.push(router.asPath, router.asPath, {
              locale: e.target.value
            });
            setLanguage(e.target.value);
          }}
        >
          <option value='en'>{lang.en}</option>
          <option value='tr'>{lang.tr}</option>
        </select> */}
      </div>
    </footer>
  );
}
