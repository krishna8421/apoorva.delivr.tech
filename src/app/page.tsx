"use client";

import { syncopate } from "@/fonts";
import Image from "next/image";
import { IProject, PROJECTS } from "@/constants";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { FaReact } from "react-icons/fa";

export default function HomePage() {
  return (
    <main>
      <section className="px-2">
        <h1
          className={`${syncopate.className} text-5xl md:text-8xl text-center mt-24`}
        >
          Apoorva Kumari
        </h1>
        <p
          className={`${syncopate.className} text-xm sm:text-md md:text-xl text-gray-100 text-center mt-4 md:mt-6`}
        >
          3D Artist | XR Designer | UX Specialist
        </p>
        
      </section>
      <div className="h-96"></div>
    </main>
  );
}
