import "./globals.css";
import { Inter } from "next/font/google";
import ThemeProvider from "./providers/Themeproviders";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather-App",
  description: "Created by Paras Parashar using Next js 13.4 with tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <main>
            <div>{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
