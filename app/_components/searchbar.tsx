import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const SearchBar = ({ classes }: { classes: string }) => {
  return (
    <div className={cn("flex", classes)}>
      <Input />
      <Button></Button>
    </div>
  );
};
export default SearchBar;
