import Topbar from '@/components/shared/Topbar';
import Bottombar from '@/components/shared/Bottombar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';

const MainLayout = async (props: { children: React.ReactNode }) => {
  return (
    <>
      <main className='flex flex-row'>
        <div className='z-[80] hidden md:inset-y-0 md:flex md:w-64 md:flex-col'>
          <LeftSidebar />
        </div>
        <section className='flex min-h-screen flex-1 flex-col items-center px-6 pb-12 pt-6 max-md:pb-32'>
          <div className='w-full'>
            <Topbar />
            {props.children}
          </div>
        </section>
        <div className='inset-y-0 z-[80] flex w-64 flex-col max-xl:hidden'>
          <RightSidebar />
        </div>
      </main>
      <div className='relative z-[999]'>
        <Bottombar />
      </div>
    </>
  );
};

export default MainLayout;
