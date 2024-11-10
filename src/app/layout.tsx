import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Student Paddy",
  description: "Student Paddy website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFFFFF] flex flex-col h-screen">
        <nav className="fixed top-0 left-0 w-full z-50">
          <NavBar />
        </nav>
        <div className="min-h-[100px] sticky top-0" />
        {/*Spacer div to occupy the space beneath the floating fixed NavBar*/}
        <div className="overflow-y-auto overflow-x-hidden no-scrollbar flex-1 flex flex-col justify-between">
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
