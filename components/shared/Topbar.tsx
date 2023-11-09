import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  return (
    <nav className="bg-[rgba(0,0,0,.3)]">
      <div className="text-slate-100 flex flex-row items-center justify-between py-4 px-6 mx-auto max-w-7xl">
        <Link href="/movies" className="flex flex-row items-center gap-4">
          {/* <Image src="/next.svg" width={24} height={24} alt="logo" /> */}
          <p className="font-extrabold text-orange-600 text-lg">Movie Trailers</p>
        </Link>

        <div className="flex w-full justify-end">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
