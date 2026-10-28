import "./globals.css";
import { Providers } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@600;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-full bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">
        <Providers>
          <Toaster />
          <main className="">
            {children}
          </main>
        </Providers>

      </body>
    </html>
  );
}