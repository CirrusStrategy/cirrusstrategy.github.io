import Head from "next/head";
import { DM_Sans, Karla, Libre_Franklin, Sora } from "next/font/google";
import "../styles/globals.css";
import StyledComponentsRegistry from "./registry";

const dmsans = DM_Sans({
  weight: "variable",
  subsets: ["latin"],
  variable: "--dmsans-font",
});

const librefranklin = Libre_Franklin({
  weight: "variable",
  subsets: ["latin"],
  variable: "--libref-font",
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
    <html className={librefranklin.variable} lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
