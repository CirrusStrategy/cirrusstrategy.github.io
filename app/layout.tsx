import Head from "next/head";
import { Sora } from "next/font/google";
import "../styles/globals.css";
import StyledComponentsRegistry from "./registry";

const sora = Sora({
  weight: "variable",
  subsets: ["latin"],
  variable: "--sora-font",
});

export const metadata = {
  title: "Cirrus Strategy",
  description:
    "",
  appleWebApp: {
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={sora.variable} lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
