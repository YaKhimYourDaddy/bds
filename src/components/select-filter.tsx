// "use client";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Filter } from "@/lib/definitions";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// export default function SelectFilter({ value, label, items }: Filter) {
//   const searchParams = useSearchParams();
//   const selectedValue = searchParams.get(value) || items[0].value;
//   const pathname = usePathname();
//   const { replace } = useRouter();
//   const handleChange = (newValue: string) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set(value, newValue);
//     replace(`${pathname}?${params.toString()}`);
//   };
//   return (
//     <Select>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder={label} />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           {items.map((item) => (
//             <SelectItem key={item.value} value={item.value}>
//               {item.label}
//             </SelectItem>
//           ))}
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// }
