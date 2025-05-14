import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default async function Search(props: {
  searchParams?: Promise<{
    tab?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const currentTab = searchParams.get("tab") || tabs[0].value;
  const handleTabChange = (tabValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tabValue);
    router.replace(`${pathname}?${params.toString()}`); // Use replace to avoid full page reload
  };

  return (
    <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {tabs.map((tab) => (
          <Link key={tab.value} href={`?${new URLSearchParams({})}`}>
            <TabsTrigger key={tab.value} value={tab.value} className="w-full">
              {tab.label}
            </TabsTrigger>
          </Link>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.filters.map((filter) => (
            <Select key={filter.value}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={filter.label} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {filter.items.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}
