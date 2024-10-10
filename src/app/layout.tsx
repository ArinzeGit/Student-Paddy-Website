// import NavBar from "@/components/NavBar";
import NavBar from "@/components/NavBar";
import "./globals.css";
export const metadata = {
  title: "Student Paddy website",
  description: "Student Paddy website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FFFFFF] h-screen flex flex-col">
        <nav>
          <NavBar />
        </nav>
        <div className="overflow-y-auto no-scrollbar">
          <main>{children}</main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
