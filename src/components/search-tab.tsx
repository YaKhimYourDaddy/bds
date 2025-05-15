import { tabs } from "@/lib/constants";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { use } from "react";

export default function SearchTab({
  tabPromise,
  children,
}: {
  tabPromise: Promise<{ tab: string }>;
  children?: React.ReactNode;
}) {
  const { tab } = use(tabPromise);
  return (
    <Tabs value={tab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {tabs.map((tab) => (
          <Link key={tab.value} href={`/tim-kiem/${tab.value}`}>
            <TabsTrigger key={tab.value} value={tab.value} className="w-full">
              {tab.label}
            </TabsTrigger>
          </Link>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}
