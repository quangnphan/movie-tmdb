import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

const MainLayout = async (props: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <main className="flex flex-row">
        <div className="hidden md:flex md:w-52 md:flex-col md:inset-y-0 z-[80]">
          <LeftSidebar />
        </div>
        <section className="flex min-h-screen flex-1 flex-col items-center px-6 pb-10 pt-4 max-md:pb-32 sm:px-10">
          <div className="w-full">
            <Topbar />
            {props.children}
          </div>
        </section>
        <RightSidebar />
      </main>
      <Bottombar />
    </div>
  );
};

export default MainLayout;
