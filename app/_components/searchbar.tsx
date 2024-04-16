import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icons from "@/components/shared/icons/index";
const SearchBar = ({ classes }: { classes: string }) => {
  return (
    <div className={cn("flex items-center h-12  w-96", classes)}>
      <Input
        placeholder="جستجو محصولات ..."
        className="rounded-l-none rounded-r-full  border-none focus:outline-0"
      />
      <Button className="text-white bg-red-500 rounded-r-none rounded-l-full">
        <Icons name="Search" />
      </Button>
    </div>
  );
};
export default SearchBar;
