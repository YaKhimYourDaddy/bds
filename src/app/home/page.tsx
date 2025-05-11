import { HeroHeader } from "@/components/hero6-header";
import Navbar from "@/components/navbar";
import Header from "@/components/user-header";
export default function page() {
  return (
    <>
      <Navbar />
      <HeroHeader />
      {/* <Header /> */}
      <main className="overflow-hidden pt-20">
        <div className="flex flex-1 flex-col gap-4 p-4 overflow-hidden">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl " />
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl " />
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl " />
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl " />
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl " />
        </div>
      </main>
    </>
  );
}
