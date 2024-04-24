import ProfileForm from "./_components/ProfileForm";
import { Button } from "@/components/ui/button";
import Link from "@/node_modules/next/link";
const Dashboard = () => {
  return (
    <div className="w-full min-h-screen p-20 ">
      <ProfileForm />
      <Link href={"/dashboard/edit"}>
        <Button className="my-10">ویرایش پروفایل</Button>
      </Link>
    </div>
  );
};
export default Dashboard;
