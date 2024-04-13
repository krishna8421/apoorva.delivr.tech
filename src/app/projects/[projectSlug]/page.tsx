"use client";

import { PROJECTS } from "@/constants";
import { syncopate } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
// import { Chip, Avatar } from "@nextui-org/react";
// import type { Metadata, ResolvingMetadata } from "next";
// import { SITE_NAME } from "@/constants";

export const dynamic = "force-static";

interface IProps {
  params: { projectSlug: string };
}

// export async function generateMetadata({
//   params: { projectSlug },
// }: IProps): Promise<Metadata> {
//   const project = PROJECTS.find(
//     (project) => project.projectSlug === projectSlug
//   );

//   if (!project) {
//     throw new Error(`Project not found for slug: ${projectSlug}`);
//   }
//   return {
//     title: `${project.title} | ${SITE_NAME}`,
//   };
// }

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
          className={`mt-20 text-5xl md:text-6xl ${
            project.subTitle ? "" : "mb-8"
          } tracking-tight font-extrabold text-center text-white uppercase ${
            syncopate.className
          }`}
        >
          {project.title}
        </h2>

        {project.subTitle && (
          <h2
            className={`text-balance text-xl md:text-2xl my-8 tracking-tight font-extrabold text-center text-white uppercase ${syncopate.className}`}
          >
            {project.subTitle}
          </h2>
        )}

        {/* TODO */}
        {/* {project.tools && (
          <div
            className={`w-full flex gap-4 justify-center mb-8 flex-wrap ${
              project.tools.length === 0 ? "hidden" : ""
            }`}
          >
            {project.tools.map((tool, i) => (
              <Chip
                key={i}
                variant="flat"
                avatar={<Avatar name="JW" src={`/tools/${tool.logo}`} />}
              >
                {tool.name}
              </Chip>
            ))}
          </div>
        )} */}

        <div className="text-white text-justify first-letter:text-3xl">
          {project.description}
        </div>
        {project.extendedDescription && (
          <div className="text-gray-200 mt-8 text-lg font-semibold">
            {project.extendedDescription}
          </div>
        )}
        <div className={`py-16 flex flex-col gap-6`}>
          {project.videos && (
            <div>
              {project.videos.startMain.map((video, index) => (
                <video
                  key={index}
                  autoPlay
                  muted
                  loop
                  src={`/projects/${project.projectSlug}/start-video/${video}`}
                  className="rounded-lg border border-zinc-900 shadow-xl w-full h-full"
                />
              ))}
            </div>
          )}
          <div
            className={`flex gap-6 flex-col ${
              project.images.startMain ? "" : "hidden"
            }`}
          >
            {project.images.startMain?.map((image, index) => (
              <Image
                key={index}
                src={`/projects/${project.projectSlug}/start-main/${image}`}
                alt="Starting Main image"
                width={800}
                height={600}
                quality={100}
                className="rounded-lg border border-zinc-900 shadow-xl w-full h-full"
              />
            ))}
          </div>
          <div
            className={`grid gap-6 grid-cols-1 md:grid-cols-2 ${
              project.images.startMain ? "" : "hidden"
            }`}
          >
            {project.images.startGrid?.map((image, index) => (
              <div className="relative w-full" key={index}>
                <Image
                  src={`/projects/${project.projectSlug}/start-grid/${image}`}
                  alt="Starting grid image"
                  width={800}
                  height={600}
                  className="rounded border border-zinc-900 shadow-xl"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-6 flex-col">
            {project.images.main.map((image, index) => (
              <Image
                key={index}
                src={`/projects/${project.projectSlug}/main/${image}`}
                alt="Main image"
                width={800}
                height={600}
                quality={100}
                className="rounded-lg border border-zinc-900 shadow-xl w-full h-full"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
