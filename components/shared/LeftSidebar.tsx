"use client";

import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { sidebar_links } from "@/helper/constants";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full border-slate-600 border-r text-white">
      <div className="px-4 py-2 flex-1">
        <Link href="/home" className="flex items-center mb-14">
          {/* <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div> */}
          <h1 className={cn("text-2xl font-bold", montserrat)}>
            Movie Trailers
          </h1>
        </Link>
        <div className="space-y-1">
          {sidebar_links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                )}
              >
                <div className="flex items-center flex-1">
                  <link.icon className="h-5 w-5 mr-3" />
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
