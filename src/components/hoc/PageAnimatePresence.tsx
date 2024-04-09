"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import FrozenRoute from "./FrozenRoute";
import { PropsWithChildren } from "react";

const PageAnimatePresence = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
