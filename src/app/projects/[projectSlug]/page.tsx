"use client";

import { PROJECTS } from "@/constants";
import { syncopate } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

export const dynamic = "force-static";

interface IProps {
  params: { projectSlug: string };
}

export default function ProjectPage({ params: { projectSlug } }: IProps) {
  const project = PROJECTS.find(
    (project) => project.projectSlug === projectSlug
  );
  if (!project) {
    throw new Error(`Project not found for slug: ${projectSlug}`);
  }

  return (
    <main className="">
      <div className="px-4 mx-auto max-w-screen-md">
        <span>
          <Link
            href="/projects"
            className="text-sm text-gray-200 hover:text-gray-100 font-medium flex items-center gap-2 my-4 hover:underline"
          >
            <IoChevronBack />
            back
          </Link>
        </span>
        <h2
          className={`my-20 text-6xl tracking-tight font-extrabold text-center text-white uppercase ${syncopate.className}`}
        >
          {project.title}
        </h2>
        <div className="text-white text-justify first-letter:text-3xl">
          {project.description}{" "}
          <span className="italic font-semibold text-gray-200 underline decoration-2 decoration-indigo-500">
            {project.extendedDescription}
          </span>
        </div>
        <div className="py-16 flex flex-col gap-6">
          <div className="grid gap-6 grid-cols-2">
            {project.images.startGrid.map((image, index) => (
              <div className="relative w-full" key={index}>
                <Image
                  src={`/img/projects/${project.projectSlug}/start-grid/${image}`}
                  alt={image}
                  width={400}
                  height={400}
                  className="rounded border border-zinc-900 shadow-xl"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-6 flex-col">
            {project.images.main.map((image, index) => (
              <div className="relative w-full h-96" key={index}>
                <Image
                  src={`/img/projects/${project.projectSlug}/main/${image}`}
                  alt={image}
                  fill
                  className="rounded border border-zinc-900 shadow-xl absolute object-cover w-full h-full inset-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
