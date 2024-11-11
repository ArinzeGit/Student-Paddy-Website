import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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
    <html lang="en" className="overflow-y-auto no-scrollbar">
      <body className="bg-[#FFFFFF] flex flex-col h-screen">
        <nav className="fixed top-0 left-0 w-full z-50">
          <NavBar />
        </nav>
        <div className="h-[100px] shrink-0" />
        {/*Spacer div for fixed NavBar*/}
        <div className="shrink-0 grow">
          <ScrollToTop>
            <main className="w-screen overflow-x-hidden">{children}</main>
          </ScrollToTop>
        </div>
        <footer className="shrink-0">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
