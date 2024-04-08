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
}

function Card({ data }: CardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const { name, description, projectSlug } = data;

  return (
    <section className="h-screen flex justify-center items-center origin-center gap-8 snap-y snap-mandatory">
      <Link href={`/projects/${projectSlug}`}>
        <div
          ref={ref}
          className="w-96 h-96 relative snap-always snap-center hover:scale-105 transition-all duration-150 ease-in-out"
        >
          <Image
            src={`/img/projects/${projectSlug}.jpg`}
            alt="A London skyscraper"
            width={300}
            height={300}
            className="rounded-lg absolute object-cover w-full h-full"
          />
        </div>
      </Link>
      <motion.div style={{ y }}>
        <h2 className="text-4xl font-mono font-medium text-gray-200 select-none tracking-tight">{`#00${projectSlug}`}</h2>
        <Link href={`/projects/${projectSlug}`}>
          <h1
            className={`text-6xl font-extrabold text-white tracking-tight hover:underline ${syncopate.className}`}
          >
            {name}
          </h1>
        </Link>
        <h2 className="text-lg font-light text-white tracking-tight line-clamp-3">
          {description}
        </h2>
      </motion.div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2
          className={`mt-8 text-6xl tracking-tight font-extrabold text-center text-white ${syncopate.className}`}
        >
          Projects
        </h2>
        <div className="m-auto">
          {PROJECTS.map((project, i) => (
            <Card data={project} key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
