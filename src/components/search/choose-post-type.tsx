import { postTypes } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { use } from "react";
import SubFilter from "@/components/search/sub-filter";

export default function ChoosePostType({
  tabPromise,
}: {
  tabPromise: Promise<{ tab: string }>;
}) {
  const { tab } = use(tabPromise);
  return (
    <>
      <Tabs value={tab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {postTypes.map((type) => (
            <Link key={type.value} href={`/tim-kiem/${type.value}`}>
              <TabsTrigger value={type.value} className="w-full">
                {type.label}
              </TabsTrigger>
            </Link>
          ))}
        </TabsList>
        {postTypes.map((type) => (
          <TabsContent key={type.value} value={type.value}>
            {type.filters.map((filter) => (
              <SubFilter
                key={type.value + filter.value}
                value={filter.value}
                label={filter.label}
                items={filter.items}
              />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}
