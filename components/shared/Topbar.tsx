"use client"

import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";
import { useForm } from "react-hook-form";
import Searchbar from "./Searchbar";

const Topbar = () => {
  const form = useForm();
  const isLoading = form.formState.isSubmitting;
  return (
    <div className="flex items-center">
      <MobileSidebar />
      <div>
        <Searchbar />
      </div>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Topbar;
