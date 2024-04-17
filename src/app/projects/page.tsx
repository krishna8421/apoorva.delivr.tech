"use client";

import { syncopate } from "@/fonts";
import { PROJECTS } from "@/constants";
import { Tabs, Tab } from "@nextui-org/react";
import { useProjectCategory } from "@/store/useProjectCategory";
import Card from "./card";
// import type { Metadata } from "next";
// import { SITE_NAME } from "@/constants";

// export const metadata: Metadata = {
//   title: `Projects | ${SITE_NAME}`,
// }

export default function ProjectsPage() {
  const { category, setCategory } = useProjectCategory();

  return (
    <main className="">
      <div className="px-4 mx-auto max-w-4xl">
        <h2
          className={`mt-24 text-6xl tracking-tight font-extrabold text-center text-white ${syncopate.className}`}
        >
          Projects
        </h2>

        <div className="w-full flex flex-col justify-center items-center mt-16">
          <Tabs
            key="secondary"
            color="secondary"
            aria-label="Options"
            selectedKey={category}
            onSelectionChange={setCategory as any}
            radius="full"
          >
            <Tab key="3d" title="3D">
              <div className="m-auto">
                {PROJECTS.filter((project) => project.category === "3D").map(
                  (project, i) => (
                    <Card data={project} index={i + 1} key={i} />
                  )
                )}
              </div>
            </Tab>
            <Tab key="ux/xr" title="UX/XR">
              <div className="m-auto">
                {PROJECTS.filter((project) => project.category === "UX/XR").map(
                  (project, i) => (
                    <Card data={project} index={i + 1} key={i} />
                  )
                )}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
