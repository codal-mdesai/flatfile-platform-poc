import Menu from "./globals/Menu";
import "./globals/global.css";

export const metadata = {
  title: "Embedded Flatfile in a Next.js App",
  description: "Generated by Flatfile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Menu />
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
