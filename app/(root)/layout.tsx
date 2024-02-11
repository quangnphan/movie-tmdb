import Topbar from '@/components/shared/Topbar';
import Bottombar from '@/components/shared/Bottombar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';

const MainLayout = async (props: { children: React.ReactNode }) => {
  return (
    <>
      <main className='flex flex-row overflow-hidden'>
        <div className='z-[80] hidden md:inset-y-0 md:flex md:w-[240px] md:flex-col'>
          <LeftSidebar />
        </div>
        <section className='flex min-h-screen flex-1 flex-col items-center container px-[10px] md:px-[15px] py-6'>
          <div className='w-full'>
            <Topbar />
            {props.children}
          </div>
        </section>
        <div className='inset-y-0 z-[80] flex w-[240px] flex-col max-xl:hidden'>
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
