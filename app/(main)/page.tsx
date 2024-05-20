import DisplayCategories from "./_components/DisplayCategory/index";
import MainPageCarousel from "./_components/MainPageCarosel";
const MainPage = () => {
  return (
    <div className="w-full flex flex-col">
      <DisplayCategories classes="my-10" />
      <div className="w-full flex justify-center items-center  px-14">
        <MainPageCarousel />
      </div>
    </div>
  );
};
export default MainPage;
