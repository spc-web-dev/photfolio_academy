import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout ({ children }: { 
    children: React.ReactNode;
}){
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="p-4 w-full font-sans">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}