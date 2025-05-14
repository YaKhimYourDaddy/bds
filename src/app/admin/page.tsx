import AdminDashboard from "@/components/AdminDashboard";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";

export default async function AdminPage() {
  // const session = await getServerSession(authOptions);
  // Replace with actual admin check
  // const isAdmin = session?.user.email === "admin@example.com";

  // if (!session || !isAdmin) {
  //   redirect("/dang-nhap");
  // }

  return <AdminDashboard />;
}
