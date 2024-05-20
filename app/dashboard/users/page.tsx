import UserTable from "./_components/UserTable/index";
import UserDashboardHeader from "./_components/UserHeader";
const DashboardUser = () => {
  return (
    <div className="w-full min-h-screen p-20 flex flex-col ">
      <UserDashboardHeader />
      <UserTable />
    </div>
  );
};
export default DashboardUser;
