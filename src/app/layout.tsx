"use client";
import Navigation from "@/components/Navigation/Navigation";
import styles from "./globals.module.scss";
import { AnimatePresence } from "framer-motion";
import { useAppStore } from "@/store/appStore";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { backgroundColor } = useAppStore();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={styles.body} style={{ backgroundColor }}>
        <Navigation />
        <AnimatePresence>{children}</AnimatePresence>
      </body>
    </html>
  );
}
