import ChoosePostType from "@/components/search/choose-post-type";
import SearchButton from "@/components/search/search-button";
import { SearchParams } from "nuqs";
export default async function Page({
  params,
  searchParam,
}: {
  params: Promise<{ tab: string }>;
  searchParams: Promise<SearchParams>;
}) {
  return (
    <>
      <ChoosePostType tabPromise={params} />
      <SearchButton />
    </>
  );
}
