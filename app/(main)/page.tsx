import { Button } from "@/components/ui/button";
const MainPage = () => {
  return (
    <div>
      صفحه اصلی
      <Button
        variant="destructive"
        className="rounded-full bg-green-300 hover:bg-yellow-300"
      >
        دکمه
      </Button>
    </div>
  );
};
export default MainPage;
