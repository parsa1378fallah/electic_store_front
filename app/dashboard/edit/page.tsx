import EditProfileForm from "./_components/EditProfileForm";
import UploadImage from "../_components/UploadImage";
const Dashboard = () => {
  return (
    <div className="w-full min-h-screen p-20 flex flex-col gap-10 ">
      <UploadImage />
      <EditProfileForm />
    </div>
  );
};
export default Dashboard;
