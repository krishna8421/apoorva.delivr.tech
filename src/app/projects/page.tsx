"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { syncopate } from "@/fonts";
import Image from "next/image";
import { useRef } from "react";
// import { useInView } from "react-intersection-observer";
import projects from "./projects.json";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface CardProps {
  data: {
    name: string;
    description: string;
    imageUrl: string;
    url: string;
  };
}

function Card({ data }: CardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const { name, description, imageUrl, url } = data;

  return (
    <section className="h-screen flex justify-center items-center origin-center gap-8 snap-y snap-mandatory">
      <div ref={ref} className="w-96 h-96 relative snap-always snap-center">
        <Image
          src={imageUrl}
          alt="A London skyscraper"
          width={300}
          height={300}
          className="rounded-lg absolute object-cover w-full h-full"
        />
      </div>
      <motion.div style={{ y }}>
        <h2
          className="text-4xl font-bold text-white tracking-tight"
        >{`#00${url.split("/")[2]}`}</h2>
        <h1
          className={`text-6xl font-extrabold text-white tracking-tight ${syncopate.className}`}
        >{name}</h1>
        <h2
          className="text-lg font-light text-white tracking-tight"
        >{description}</h2>
      </motion.div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2
          className={`m-8 text-6xl tracking-tight font-extrabold text-center text-white ${syncopate.className}`}
        >
          Projects
        </h2>
        <div className="m-auto">
          {projects.map((project, i) => (
            <Card data={project} key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
