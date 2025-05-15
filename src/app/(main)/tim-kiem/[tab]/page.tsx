import { TabsContent } from "@/components/ui/tabs";
import { tabs } from "@/lib/constants";
import SearchTab from "@/components/search-tab";
import SelectFilter from "@/components/select-filter";
export default async function Page({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  return (
    <>
      <SearchTab tabPromise={params}>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.filters.map((filter) => (
              <SelectFilter
                key={tab.value + filter.value}
                value={filter.value}
                label={filter.label}
                items={filter.items}
              />
            ))}
          </TabsContent>
        ))}
      </SearchTab>
    </>
  );
}
