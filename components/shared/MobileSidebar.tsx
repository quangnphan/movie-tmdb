"use client"

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import LeftSidebar from "./LeftSidebar";

const MobileSidebar = () => {
  const [isMounted,setIsMounted] = useState(false);
  useEffect(()=>{
    setIsMounted(true)
  },[]);

  if(!isMounted){
    return null
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side="left">
        <LeftSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;