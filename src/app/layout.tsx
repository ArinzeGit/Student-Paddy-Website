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
      <body className="bg-[#FFFFFF] h-screen">
        <nav className="fixed top-0 left-0 w-full z-50">
          <NavBar />
        </nav>
        <div className="pt-[100px] overflow-y-auto overflow-x-hidden no-scrollbar h-full flex flex-col justify-between">
          <main className="">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
