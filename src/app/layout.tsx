"use client";
import Navigation from "@/components/Navigation/Navigation";
import styles from "./globals.module.scss";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={styles.body}>
        <Navigation />
        <AnimatePresence>{children}</AnimatePresence>
      </body>
    </html>
  );
}
