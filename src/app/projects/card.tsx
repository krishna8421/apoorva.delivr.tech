import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { IProject } from "@/constants";
import { syncopate } from "@/fonts";

const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export interface CardProps {
  data: IProject;
  index: number;
}

function Card({ data, index }: CardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 150);

  const {
    title,
    subTitle,
    projectSlug,
    images: { thumbnail },
  } = data;

  return (
    <section className="h-screen flex justify-between items-center origin-center gap-6">
      <Link className="flex-1" href={`/projects/${projectSlug}`}>
        <div
          ref={ref}
          className="w-96 h-96 relative m-auto hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <Image
            src={`/projects/${projectSlug}/${thumbnail}`}
            alt={subTitle || title}
            fill
            quality={100}
            className="rounded-lg absolute object-cover w-full h-full border border-gray-900 shadow-xl"
          />
        </div>
      </Link>
      <motion.div
        style={{ y }}
        className="flex-1 max-w-96 h-96 flex flex-col justify-center gap-4"
      >
        <h2 className="text-4xl font-mono italic text-gray-200 select-none tracking-tight font-light">{`#00${index}`}</h2>
        <Link
          href={`/projects/${projectSlug}`}
          className={`text-4xl font-extrabold text-white tracking-tight hover:underline uppercase ${syncopate.className}`}
        >
          {title}
        </Link>
        {subTitle && (
          <h3
            className={`text-lg text-gray-200 tracking-tight line-clamp-2 font-semibold ${syncopate.className}`}
          >
            {subTitle}
          </h3>
        )}
      </motion.div>
    </section>
  );
}

export default Card;
