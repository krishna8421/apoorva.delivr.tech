"use client";

import { syncopate, caveat, rockSalt } from "@/fonts";
import Image from "next/image";
import { IProject, PROJECTS, IProjectCategory } from "@/constants";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Typewriter } from "react-simple-typewriter";
import { TfiLinkedin } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";

export default function HomePage() {
  const name = "Apoorva";
  const myRoles = ["3D Artist", "XR Designer", "UX Specialist"];

  // const featuredProjects: Record<IProjectCategory, IProject | undefined> = {
  //   "3D": PROJECTS.find((project) => project.category === "3D"),
  //   "UX/XR": PROJECTS.find((project) => project.category === "UX/XR"),
  //   Graphics: PROJECTS.find((project) => project.category === "Graphics"),
  // };

  // const renderFeaturedProjects = () => {
  //   return Object.values(featuredProjects).map((project, index) => {
  //     if (!project) return null;
  //     return <div key={index} className=""></div>;
  //   });
  // };

  return (
    <main className="">
      <section className="flex md:flex-row flex-col gap-32 md:gap-8 px-12 pt-24 min-h-[calc(90vh-56px)]">
        <div className="flex-1 md:mt-24 space-y-6">
          <span className="text-xl text-gray-300">Hey there, It&apos;s</span>
          <h1 className={`text-6xl font-bold ${syncopate.className}`}>
            {name}
          </h1>
          <h3 className={`text-2xl text-gray-200 ${rockSalt.className}`}>
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={myRoles}
            />
          </h3>
          <div>
            <Link
              href="/contact"
              className="underline underline-offset-4 text-sm"
            >
              Get in touch -&gt;
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <Image
            src="/assets/girl.png"
            alt="Girl Image"
            width={400}
            height={400}
            className="rounded-full shadow-2xl"
          />
          <motion.div className="absolute -top-8 -left-20 md:-top-16 md:-left-20 animate-float">
            <Image
              src="/assets/controller.png"
              alt="Controller Image"
              width={230}
              height={230}
            />
          </motion.div>
          <motion.div className="absolute -top-16 -right-8 md:-top-24 md:-right-8 animate-float">
            <Image
              src="/assets/cup.png"
              alt="Cup Image"
              width={250}
              height={250}
            />
          </motion.div>
          <motion.div className="absolute top-20 -right-16 md:top-20 md:-right-36 animate-float">
            <Image
              src="/assets/vr.png"
              alt="VR Image"
              width={200}
              height={200}
            />
          </motion.div>
        </div>
      </section>

      {/* <section className="flex justify-center">
        <p className="text-gray-200 text-center max-w-2xl">
          🎨 As a 3D Artist, XR Designer, and UX Specialist, I dive into the
          realm of immersive experiences with fervor! I thrive on crafting
          interactive wonders that defy the limits of technology, sculpting
          worlds where imagination knows no bounds. 🚀
        </p>
      </section> */}

      {/* <section className="px-12 py-24">{renderFeaturedProjects()}</section> */}
    </main>
  );
}
