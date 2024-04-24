import Sidebar from "./_components/sidebar/index";
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
