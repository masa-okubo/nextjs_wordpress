import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
export const Header: React.FC = () => {
  const router = useRouter();
  const isCurrentPath = (path: 'posts' | 'projects' | 'about'): boolean => {
    const splitedRoute = router.asPath.split('/');
    return splitedRoute.includes(path);
  };
  return (
    <nav className='py-3 bg-white rounded-md shadow-lg px-7 bg-opacity-60 mb-5 sm:mb-16'>
      <div className='flex items-center justify-between'>
        <Link href='/' className='text-2xl font-semibold tracking-wide text-gray-700 whitespace-nowrap'>
          Masahiro&apos;s tech note
        </Link>
        <div className='items-center hidden sm:flex sm:space-x-8 md:space-x-12'>
          <Link
            href='/posts'
            className={`tracking-wider text-gray-700 text-base ${
              isCurrentPath('posts') ? 'underline underline-offset-2 decoration-gray-700 decoration-2' : ''
            }`}
          >
            Posts
          </Link>
          <Link
            href='/projects'
            className={`tracking-wider text-gray-700 text-base ${
              isCurrentPath('projects') ? 'underline underline-offset-2 decoration-gray-700 decoration-2' : ''
            }`}
          >
            Projects
          </Link>
          <Link
            href='/about'
            className={`tracking-wider text-gray-700 text-base ${
              isCurrentPath('about') ? 'underline underline-offset-2 decoration-gray-700 decoration-2' : ''
            }`}
          >
            About
          </Link>
        </div>
        <div className='relative'>
          <svg className='w-6 h-6 flex-none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32.579 31.775'>
            <path
              id='path_1'
              data-name='path 1'
              d='M152.608,107.44a16.291,16.291,0,0,0-5.148,31.747c.815.149,1.112-.353,1.112-.785,0-.387-.014-1.411-.022-2.771-4.531.985-5.487-2.183-5.487-2.183a4.315,4.315,0,0,0-1.809-2.383c-1.479-1.011.112-.99.112-.99a3.42,3.42,0,0,1,2.495,1.678,3.468,3.468,0,0,0,4.741,1.354,3.482,3.482,0,0,1,1.034-2.178c-3.617-.411-7.42-1.808-7.42-8.051a6.3,6.3,0,0,1,1.677-4.371,5.852,5.852,0,0,1,.16-4.311s1.367-.438,4.479,1.67a15.448,15.448,0,0,1,8.156,0c3.11-2.108,4.475-1.67,4.475-1.67a5.854,5.854,0,0,1,.163,4.311A6.286,6.286,0,0,1,163,122.878c0,6.258-3.809,7.635-7.438,8.038a3.889,3.889,0,0,1,1.106,3.017c0,2.178-.02,3.935-.02,4.469,0,.435.294.942,1.12.783a16.292,16.292,0,0,0-5.16-31.745Z'
              transform='translate(-136.32 -107.44)'
              fill='#0f0c0d'
              fillRule='evenodd'
            ></path>
          </svg>
          <a className='absolute inset-0' href='https://github.com/masahiro04' target='_blank' rel='noreferrer'></a>
        </div>
      </div>
      {/* mobile */}
      <div className='grid grid-cols-3 divide-x divide-gray-300 mt-3 sm:hidden'>
        <Link
          href='/posts'
          className={`tracking-wider text-gray-700 text-sm text-center ${
            isCurrentPath('posts') ? 'underline underline-offset-2 decoration-gray-700 decoration-2' : ''
          }`}
        >
          Posts
        </Link>
        <Link
          href='/projects'
          className={`tracking-wider text-gray-700 text-sm text-center ${
            isCurrentPath('projects') ? 'underline underline-offset-2 decoration-gray-700 decoration-2' : ''
          }`}
        >
          Projects
        </Link>
        <Link
          href='/about'
          className={`tracking-wider text-gray-700 text-sm text-center ${
            isCurrentPath('about') ? 'underline underline-offset-2 decoration-gray-700 decoration-2' : ''
          }`}
        >
          About
        </Link>
      </div>
      {/* end mobile */}
    </nav>
  );
};
