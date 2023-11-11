import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";

const MainLayout = async (props: { children: React.ReactNode }) => {
  return (
    <div className="bg-dark-lighten">
      <main className="flex flex-row">
        <div className="hidden md:flex md:w-64 md:flex-col md:inset-y-0 z-[80]">
          <LeftSidebar />
        </div>
        <section className="flex min-h-screen flex-1 flex-col items-center px-6 pb-10 pt-6 max-md:pb-32 sm:px-10">
          <div className="w-full">
            <Topbar />
            {props.children}
          </div>
        </section>
        <div className="max-xl:hidden w-64 flex flex-col inset-y-0 z-[80]">
          <RightSidebar />
        </div>
      </main>
      <Bottombar />
    </div>
  );
};

export default MainLayout;
