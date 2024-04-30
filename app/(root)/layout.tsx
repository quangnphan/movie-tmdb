import Topbar from '@/components/shared/Topbar';
import Bottombar from '@/components/shared/Bottombar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';

const MainLayout = async (props: { children: React.ReactNode }) => {
  return (
    <>
      <main className='flex flex-row overflow-hidden'>
        <div className='z-[80] hidden lg:inset-y-0 lg:flex lg:w-[240px] lg:flex-col min-w-[240px]'>
          <LeftSidebar />
        </div>
        <section className='flex min-h-screen flex-1 flex-col container px-[10px] md:px-[15px] py-6'>
          <div className='w-full lg:w-[calc(100%-240px)] xl:w-full'>
            <Topbar />
            {props.children}
          </div>
        </section>
        <div className='inset-y-0 z-[80] flex w-full flex-col max-xl:hidden'>
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
