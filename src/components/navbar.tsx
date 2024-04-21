"use client";
import { color, motion } from "framer-motion";
import Link from "next/link";

const NavBar = () => {
  const LiClassName = "hover:underline hover:underline-offset-4";
  const whileHover = { scale: 1.1 };
  const transition = { type: "spring", stiffness: 500, duration: 0.1 };
  const initial = { opacity: 0, y: -10 };
  const animate = { opacity: 1, y: 0 };

  return (
    <motion.nav
      className="flex justify-between items-center py-4 px-4 w-full"
      initial={initial}
      animate={animate}
      transition={{
        delay: 0.1,
        ...transition,
      }}
    >
      <Link href="/">
        <span className="font-bold">apoorva</span>
      </Link>
      <ul className="flex gap-8">
        <Link href="/">
          <motion.li
            className={LiClassName}
            whileHover={whileHover}
            transition={{
              delay: 0.2,
              ...transition,
            }}
            initial={initial}
            animate={animate}
          >
            home
          </motion.li>
        </Link>
        <Link href="/projects">
          <motion.li
            className={LiClassName}
            whileHover={whileHover}
            transition={{
              delay: 0.4,
              ...transition,
            }}
            initial={initial}
            animate={animate}
          >
            projects
          </motion.li>
        </Link>
        <Link href="/contact">
          <motion.li
            className={LiClassName}
            whileHover={whileHover}
            transition={{
              delay: 0.6,
              ...transition,
            }}
            initial={initial}
            animate={animate}
          >
            contact
          </motion.li>
        </Link>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
