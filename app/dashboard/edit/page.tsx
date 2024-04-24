import EditProfileForm from "./_components/EditProfileForm";
import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";
const Dashboard = () => {
  return (
    <div className="w-full min-h-screen p-20 ">
      <EditProfileForm />
    </div>
  );
};
export default Dashboard;
