import { ReactNode } from "react";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "Frontend Mentor | Interactive comments section",
  description:
    "Desafio do FrontendMentor feito por Marysclair com React, Typescript, Next13.js e Tailwindcss",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} font-sans`}>
        <main className="bg-verylightgray py-12 text-grayishblue w-full">
          {" "}
          {children}{" "}
        </main>
      </body>
    </html>
  );
}
