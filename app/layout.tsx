import "./globals.css";
import { Play } from "next/font/google";

const play = Play({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Decode",
  description: "A community for developers to learn, share and grow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={play.className}>{children}</body>
    </html>
  );
}
