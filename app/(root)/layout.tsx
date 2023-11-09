import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";

const MainLayout = async (props: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <Topbar />
      </header>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
