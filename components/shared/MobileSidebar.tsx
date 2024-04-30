'use client';

import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import LeftSidebar from './LeftSidebar';

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='lg:hidden' />
      </SheetTrigger>
      <SheetContent className='p-0' side='left'>
        <LeftSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
