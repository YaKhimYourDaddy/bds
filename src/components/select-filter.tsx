"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "@/lib/definitions";
import { useQueryState } from "nuqs";
export default function SelectFilter({ value, label, items }: Filter) {
  const [searchParam, setSearchParam] = useQueryState(value, {
    defaultValue: "",
  });
  return (
    <Select value={searchParam} onValueChange={setSearchParam}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
