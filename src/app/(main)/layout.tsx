import MainHeader from "@/components/layout/main-header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader />
      <main className="pt-20">{children}</main>
    </>
  );
}
