"use client";
import DownIcon from "@/components/ui/icons/Down";
import UpIcon from "@/components/ui/icons/Up";
import SearchIcon from "@/components/ui/icons/Search";
import UserIcon from "@/components/ui/icons/User";
import StoreIcon from "@/components/ui/icons/Store";
import MenuIcon from "@/components/ui/icons/Menu";
import CallIcon from "@/components/ui/icons/Call";
import MoonIcon from "@/components/ui/icons/Moon";
import SunIcon from "@/components/ui/icons/Sun";
import CloseIcon from "@/components/ui/icons/Close";
import ChevronLeftIcon from "@/components/ui/icons/ChevronLeft";
import ChevronRightIcon from "@/components/ui/icons/ChevronRight";
import BellIcon from "@/components/ui/icons/Bell";
import ProductIcon from "@/components/ui/icons/Product";
import CalendarIcon from "@/components/ui/icons/Calendar";
import EditIcon from "@/components/ui/icons/Edit";
import DeleteIcon from "@/components/ui/icons/Delete";
import UploadIcon from "@/components/ui/icons/Upload";
import ProgressIcon from "@/components/ui/icons/Progress";
const Icons = ({
  name,
  classes,
  handleClick,
}: {
  name: string;
  classes: string;
  handleClick: Function;
}) => {
  let DynamicComponent;

  switch (name) {
    case "Down":
      DynamicComponent = DownIcon;
      break;
    case "Up":
      DynamicComponent = UpIcon;
      break;
    case "Search":
      DynamicComponent = SearchIcon;
      break;
    case "User":
      DynamicComponent = UserIcon;
      break;
    case "Store":
      DynamicComponent = StoreIcon;
      break;
    case "Menu":
      DynamicComponent = MenuIcon;
      break;
    case "Call":
      DynamicComponent = CallIcon;
      break;
    case "Moon":
      DynamicComponent = MoonIcon;
      break;
    case "Sun":
      DynamicComponent = SunIcon;
      break;
    case "Close":
      DynamicComponent = CloseIcon;
      break;
    case "ChevronLeft":
      DynamicComponent = ChevronLeftIcon;
      break;
    case "ChevronRight":
      DynamicComponent = ChevronRightIcon;
      break;
    case "Bell":
      DynamicComponent = BellIcon;
      break;
    case "Product":
      DynamicComponent = ProductIcon;
      break;
    case "Calendar":
      DynamicComponent = CalendarIcon;
      break;
    case "Edit":
      DynamicComponent = EditIcon;
      break;
    case "Delete":
      DynamicComponent = DeleteIcon;
      break;
    case "Upload":
      DynamicComponent = UploadIcon;
      break;
    case "Progress":
      DynamicComponent = ProgressIcon;
      break;
    default:
      DynamicComponent = CloseIcon;
  }

  return (
    <div className={classes} onClick={() => handleClick}>
      {DynamicComponent && <DynamicComponent />}
    </div>
  );
};

export default Icons;
