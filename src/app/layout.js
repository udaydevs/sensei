import "./globals.css";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconHome, IconSettings, IconUser } from "@tabler/icons-react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen w-full  ">
        <Sidebar>
          <SidebarBody className="bg-neutral-100 dark:bg-neutral-900 px-4 py-6">
            <SidebarLink
              link={{ label: "Home", href: "/", icon: <IconHome /> }}
            />

            <SidebarLink
              link={{ label: "Profile", href: "/profile", icon: <IconUser /> }}
            />
            <SidebarLink
              link={{ label: "Settings", href: "/settings", icon: <IconSettings /> }}
            />
          </SidebarBody>
        </Sidebar>
        <main className="flex-1  dark:bg-neutral-950 p-1 sm:p-4 ">
          {children}
        </main>

      </body>
    </html>
  );
}
