import Topbar from "@/components/shared/Topbar";

const DashboardLayout = async (props: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <Topbar />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default DashboardLayout;
