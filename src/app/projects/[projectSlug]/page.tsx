"use client";

import { FollowerPointerCard } from "@/components/following-pointer";
import PdfViewer from "@/components/pdf-viewer";
import { PROJECTS } from "@/constants";
import { syncopate } from "@/fonts";
import { Avatar, Chip } from "@nextui-org/react";
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
          } tracking-tight font-extrabold text-center break-words text-white uppercase ${
            syncopate.className
          }`}
        >
          {project.title.split("-\n").join("")}
        </h2>

        {project.subTitle && (
          <h2
            className={`text-balance text-xl md:text-2xl my-8 break-words tracking-tight font-extrabold text-center text-white uppercase ${syncopate.className}`}
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

        <div className="space-y-4">
          {project.description.map((desc: string, index) => (
            <h1
              key={index}
              className={`text-white text-justify ${
                index === 0 ? "first-letter:text-3xl" : ""
              } w-full overflow-hidden`}
            >
              {desc}
            </h1>
          ))}
        </div>

        {project.extendedDescription && (
          <div className="text-gray-200 mt-8 text-lg font-semibold">
            {project.extendedDescription}
          </div>
        )}

        <div className={`py-16 flex flex-col gap-6`}>
          {project.videos && (
            <div>
              {project.videos.main?.map((video, index) => (
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
              project.images.startMain && project.images.startMain.length > 0
                ? ""
                : "hidden"
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

          {project.videos && (
            <div>
              {project.videos.middle?.map((video, index) => (
                <video
                  key={index}
                  autoPlay
                  muted
                  loop
                  src={`/projects/${project.projectSlug}/middle-video/${video}`}
                  className="rounded-lg border border-zinc-900 shadow-xl w-full h-full"
                />
              ))}
            </div>
          )}

          <div
            className={`grid gap-6 grid-cols-1 md:grid-cols-2 ${
              project.images.startGrid && project.images.startGrid.length > 0
                ? ""
                : "hidden"
            }`}
          >
            {project.images.startGrid?.map((image, index) => {
              return (
                <FollowerPointerCard
                  key={index}
                  title={typeof image === "object" ? image.alt : undefined}
                  // className={typeof image === "object" ? "" : "hidden"}
                >
                  <div className="relative w-full">
                    <Image
                      src={`/projects/${project.projectSlug}/start-grid/${
                        typeof image === "object" ? image.url : image
                      }`}
                      alt="Starting grid image"
                      width={800}
                      height={600}
                      className="rounded border border-zinc-900 shadow-xl"
                    />
                  </div>
                </FollowerPointerCard>
              );
            })}
          </div>

          <div
            className={`flex gap-6 flex-col ${
              project.images.main && project.images.main.length > 0
                ? ""
                : "hidden"
            }`}
          >
            {project.images.main?.map((image, index) => (
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

          {/* {project.pdf && (
            <PdfViewer
              pdfFile={`/projects/${project.projectSlug}/pdf/${project.pdf}`}
            />
          )} */}
          <div
            className={`flex gap-6 flex-col ${
              project.pdfs && project.pdfs.length > 0 ? "" : "hidden"
            }`}
          >
            {project.pdfs?.map((pdf, index) => {
              return (
                // <FollowerPointerCard
                //   key={index}
                //   title={typeof pdf === "object" ? pdf.alt : undefined}
                //   // className={typeof pdf === "object" ? "" : "hidden"}
                // >
                  <PdfViewer
                    key={index}
                    pdfFile={`/projects/${project.projectSlug}/pdfs/${
                      typeof pdf === "object" ? pdf.url : pdf
                    }`}
                    twoPageLayout={project.twoPageLayoutPdf}
                  />
                // </FollowerPointerCard>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
