

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Menu general.
const general = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Students",
    url: "/dashboard/students",
  },
  {
    title: "Reports",
    url: "/dashboard/reports",
  },
];

// Menu setting.
const setting = [
  {
    title: "Skills",
    url: "/dashboard/skills",
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
  },
  {
    title: "Videos",
    url: "/dashboard/videos",
  },
  {
    title: "Users",
    url: "/dashboard/users",
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Button
          variant={"ghost"}
          className="flex items-center justify-start gap-4"
          asChild
        >
          <div>
            <span>
              <DashboardIcon className="w-5 h-5" />
            </span>
            <h1>LA RESSANN</h1>
          </div>
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {general.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Setting</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {setting.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          size={"auto"}
          variant={"secondary"}
          asChild
          className=" justify-start"
        >
          <Link href={'/'}>Back to homepage</Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
