'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Input } from '../ui/input';
import { Search } from 'lucide-react';

interface Props {
  routeType?: string;
}

function Searchbar({ routeType }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  //   // query after 0.3s of no input
  //   useEffect(() => {
  //     const delayDebounceFn = setTimeout(() => {
  //       if (search) {
  //         router.push(`/${routeType}?q=` + search);
  //       } else {
  //         router.push(`/${routeType}`);
  //       }
  //     }, 300);

  //     return () => clearTimeout(delayDebounceFn);
  //   }, [search, routeType]);

  return (
    <div className='flex items-center rounded-full bg-[#f3f4f6] px-4 w-full'>
      <Search className='text-slate-800' />
      <Input
        id='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // placeholder={`${
        //   routeType !== "/search" ? "Search communities" : "Search creators"
        // }`}
        placeholder='Search...'
        className='search_input no-focus'
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  );
}

export default Searchbar;
