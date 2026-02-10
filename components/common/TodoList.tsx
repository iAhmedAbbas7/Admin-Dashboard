// <== CLIENT COMPONENT ==>
"use client";

// <== IMPORTS ==>
import { Card } from "../ui/card";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { JSX, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Calendar } from "../ui/calendar";
import { ScrollArea } from "../ui/scroll-area";
import { CalendarIcon, List } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

// <== TODO LIST ITEMS DATA ==>
const TODO_LIST_ITEMS = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 9,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 10,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 11,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 12,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

// <== TODO LIST COMPONENT ==>
const TodoList = (): JSX.Element => {
  // POPOVER OPEN STATE
  const [open, setOpen] = useState<boolean>(false);
  // CALENDAR DATE STATE
  const [date, setDate] = useState<Date | undefined>(new Date());
  // RETURNING THE TODO LIST CONTENT
  return (
    // MAIN CONTAINER
    <div>
      {/* TITLE */}
      <h1 className="flex items-center gap-1 text-lg mb-6 font-semibold">
        <List /> <span>Todo List</span>
      </h1>
      {/* CALENDAR */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full cursor-pointer">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setOpen(false);
              setDate(date);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-100 mt-4 overflow-y-auto">
        {/* LIST CONTENT */}
        <div className="flex flex-col gap-2">
          {/* TODO LIST ITEMS */}
          {TODO_LIST_ITEMS.map((item) => (
            // ITEM CARD
            <Card key={item.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={`item-${item.id}`} className="cursor-pointer" />
                <label
                  htmlFor={`item-${item.id}`}
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  {item.title}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

// <== EXPORTING THE TODO LIST COMPONENT ==>
export default TodoList;
