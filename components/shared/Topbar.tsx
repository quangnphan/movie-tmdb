import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";

const Topbar = () => {
  return (
    <div className="flex items-center">
      <MobileSidebar />
      <div>Search input</div>
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
};

export default Topbar;