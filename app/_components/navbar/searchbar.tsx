import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icons from "@/components/shared/icons/index";
const SearchBar = ({ classes }: { classes?: string }) => {
  return (
    <div className={cn("flex items-center h-12  w-96", classes)}>
      <Input
        placeholder="جستجو محصولات ..."
        className="rounded-l-none rounded-r-full focus-visible:ring-transparent border-none focus:outline-0"
      />
      <Button className="text-white bg-red-500 rounded-r-none rounded-l-full hover:bg-red-500">
        <Icons name="Search" />
      </Button>
    </div>
  );
};
export default SearchBar;
