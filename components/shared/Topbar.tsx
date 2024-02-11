'use client';

import { UserButton } from '@clerk/nextjs';
import MobileSidebar from './MobileSidebar';
import { useForm } from 'react-hook-form';
import Searchbar from './Searchbar';

const Topbar = () => {
  const form = useForm();
  const isLoading = form.formState.isSubmitting;
  return (
    <div className='flex items-center gap-2 mb-6'>
      <MobileSidebar />
      <div className='flex w-full flex-row items-center justify-between gap-2'>
        <div className='w-full md:w-[400px]'>
          <Searchbar />
        </div>
        <div className='flex justify-end'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
