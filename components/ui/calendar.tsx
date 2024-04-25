import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, useDayPicker, useNavigation } from "react-day-picker";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { format, setMonth } from "date-fns"; // Import setMonth function
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-3",
        caption_start: "is-start",
        caption_between: "is-between",
        caption_end: "is-end",
        caption: "flex justify-center pt-1 relative items-center gap-1",
        caption_label:
          "flex h-7 text-sm font-medium justify-center items-center grow [.is-multiple_&]:flex",
        caption_dropdowns: "flex gap-2",
        multiple_months: "is-multiple",
        vhidden:
          "hidden [.is-between_&]:flex [.is-end_&]:flex [.is-start.is-end_&]:hidden",
        nav: "flex items-center [&:has([name='previous-month'])]:order-first [&:has([name='next-month'])]:order-last",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-6 w-6 bg-transparent p-0 text-muted-foreground"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,

        Dropdown: (props) => {
          const { fromDate, fromMonth, fromYear, toDate, toMonth, toYear } =
            useDayPicker();
          const { goToMonth, currentMonth } = useNavigation();
          if (props.name === "months") {
            const selectItems = Array.from({ length: 12 }, (_, i) => ({
              value: i.toString(),
              label: format(setMonth(new Date(), i), "MMM"),
            }));
            return (
              <Select
                value={props.value?.toString()}
                onValueChange={(newValue) => {
                  const newDate = new Date(currentMonth);
                  newDate.setMonth(parseInt(newValue));
                  goToMonth(newDate);
                }}
              >
                <SelectTrigger>{format(currentMonth, "MMM")}</SelectTrigger>
                <SelectContent>
                  {selectItems.map((selectItem) => (
                    <SelectItem key={selectItem.value} value={selectItem.value}>
                      {selectItem.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            );
          } else if (props.name === "years") {
            const earliestYear =
              fromYear || fromMonth?.getFullYear() || fromDate.getFullYear();
            const latestYear =
              toYear || toMonth?.getFullYear() || toDate.getFullYear();
            if (earliestYear && latestYear) {
              const yearsLength = latestYear - earliestYear + 1;
              const selectItems = Array.from(
                { length: yearsLength },
                (_, i) => ({
                  label: (earliestYear + i).toString(),
                  value: (earliestYear + i).toString(),
                })
              );
              return (
                <Select
                  value={props.value?.toString()}
                  onValueChange={(newValue) => {
                    const newDate = new Date(currentMonth);
                    newDate.setFullYear(parseInt(newValue));
                    goToMonth(newDate);
                  }}
                >
                  <SelectTrigger>{currentMonth.getFullYear()}</SelectTrigger>
                  <SelectContent>
                    {selectItems.map((selectItem) => (
                      <SelectItem
                        key={selectItem.value}
                        value={selectItem.value}
                      >
                        {selectItem.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              );
            }
            return <div>years</div>;
          }
          return null;
        },
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
