import "./globals.css";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconHome, IconSettings, IconUser, IconBrandLine  } from "@tabler/icons-react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <main className="">
          {children}
        </main>

      </body>
    </html>
  );
}
