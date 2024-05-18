import Sidebar from "./_components/sidebar/index";
import StickyBox from "react-sticky-box";
const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full">
      <Sidebar /> {children}
    </div>
  );
};
export default DashboardLayout;
