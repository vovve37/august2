import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "August Eriksson",
  description: "Commercial photography & AI visuals",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body className="bg-neutral-100 text-neutral-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
