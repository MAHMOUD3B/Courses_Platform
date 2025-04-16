import { League_Spartan } from "next/font/google";
import "./globals.css";

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});
export const metadata = {
  title: "Course Details",
  description: "Course 2 details and informations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spartan.className}>{children}</body>
    </html>
  );
}
