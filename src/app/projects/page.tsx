"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { syncopate } from "@/fonts";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { IProject, PROJECTS } from "@/constants";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

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
    <section className="h-screen flex justify-center items-center origin-center gap-8 snap-y snap-mandatory">
      <Link href={`/projects/${projectSlug}`}>
        <div
          ref={ref}
          className="w-96 h-96 relative snap-always snap-center hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <Image
            src={`/img/projects/${projectSlug}/main/${thumbnail}`}
            alt="A London skyscraper"
            width={300}
            height={300}
            quality={100}
            className="rounded-lg absolute object-cover w-full h-full border border-gray-900 shadow-xl"
          />
        </div>
      </Link>
      <motion.div style={{ y }}>
        <h2 className="text-4xl font-mono italic text-gray-200 select-none tracking-tight font-light">{`#00${index}`}</h2>
        <Link href={`/projects/${projectSlug}`}>
          <h1
            className={`text-5xl font-extrabold text-white tracking-tight py-4 hover:underline uppercase ${syncopate.className}`}
          >
            {title}
          </h1>
        </Link>
        <h3
          className={`text-lg text-gray-200 tracking-tight line-clamp-2 font-semibold ${syncopate.className}`}
        >
          {subTitle}
        </h3>
      </motion.div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2
          className={`mt-24 text-6xl tracking-tight font-extrabold text-center text-white ${syncopate.className}`}
        >
          Projects
        </h2>
        <div className="m-auto">
          {PROJECTS.map((project, i) => (
            <Card data={project} index={i + 1} key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
