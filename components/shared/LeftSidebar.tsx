'use client';

import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import { sidebar_links } from '@/helper/constants';
import { usePathname } from 'next/navigation';
import { Film } from 'lucide-react';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className='flex h-full flex-col space-y-4 border-r-2 border-slate-600 py-6 text-white'>
      <div className='flex-1 px-[15px] lg:fixed'>
        <Link href='/home' className='mb-14 flex items-center'>
          <div className='relative mr-2 flex h-8 w-8 flex-row items-center text-orange-600'>
            {/* <Image fill alt="logo" src="/logo.png" /> */}
            <Film />
          </div>
          <h1 className={cn('text-2xl font-bold text-orange-600', montserrat)}>
            Movie Trailers
          </h1>
        </Link>
        <div className='space-y-1'>
          {sidebar_links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-md group flex w-full cursor-pointer justify-start rounded-lg p-3 font-medium transition hover:bg-white/10 hover:text-white',
                  pathname === link.href
                    ? 'bg-white/10 text-orange-600'
                    : 'text-zinc-400'
                )}
              >
                <div className='flex flex-1 items-center'>
                  <link.icon className='mr-3 h-5 w-5' />
                  {link.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
