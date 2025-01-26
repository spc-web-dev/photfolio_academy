import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  if (
    user?.emailAddresses[0].emailAddress !==
    process.env.NEXT_PUBLIC_SECRET_USER
  ) {
    return redirect("/");
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-4 w-full font-sans">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
