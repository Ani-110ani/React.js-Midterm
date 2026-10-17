import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

export const metadata = {
  title: "My Market",
  description: "Thoughtful picks for your wardrobe, home, and everyday living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="siteMain">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
