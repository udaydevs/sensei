"use client"

import * as React from "react"
import Link from "next/link"
import axios from "axios"

import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    { title: "Dashboard", url: "/dashboard", icon: IconDashboard },
    { title: "Lifecycle", url: "/lifecycle", icon: IconListDetails },
    { title: "Analytics", url: "/analytics", icon: IconChartBar },
    { title: "Projects", url: "/projects", icon: IconFolder },
    { title: "Team", url: "/team", icon: IconUsers },
  ],
  navSecondary: [
    { title: "Settings", url: "/settings", icon: IconSettings },
    { title: "Get Help", url: "/help", icon: IconHelp },
    { title: "Search", url: "/search", icon: IconSearch },
  ],
  documents: [
    { name: "Data Library", url: "/data-library", icon: IconDatabase },
    { name: "Reports", url: "/reports", icon: IconReport },
    { name: "Word Assistant", url: "/word-assistant", icon: IconFileWord },
  ],
}

export function AppSidebar(props) {
  const [userData, setUserData] = React.useState(null)

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "http://127.0.0.1:8000/auth/profile",
          { withCredentials: true }
        )
        setUserData(res.data)
        console.log(res.data)
      } catch (error) {
        console.error("Error fetching profile:", error)
      }
    }

    fetchUser()
  }, [])

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      {/* HEADER */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/home" className="flex items-center gap-2 p-2">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-900">
                  <div className="h-2 w-2 rounded-full bg-slate-900" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Sensei
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        {/* MAIN NAV */}
        <div className="space-y-1">
          {data.navMain.map((item) => (
            <Link key={item.title} href={item.url}>
              <div className="flex items-center gap-2 p-2 hover:bg-muted rounded cursor-pointer">
                <item.icon size={18} />
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* DOCUMENTS */}
        <NavDocuments items={data.documents} />

        {/* SECONDARY */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        {userData ? (
          <NavUser user={userData} />
        ) : (
          <div className="flex items-center gap-2 p-2 animate-pulse">
            {/* Avatar placeholder */}
            <div className="h-8 w-8 rounded-lg bg-gray-300" />

            {/* Text placeholder */}
            <div className="flex-1 space-y-1">
              <div className="h-3 w-24 bg-gray-300 rounded" />
              <div className="h-2 w-16 bg-gray-200 rounded" />
            </div>
          </div>
        )}
      </SidebarFooter>
      </Sidebar>

      )
}