"use client";
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react'

type Props = {
  projectName: string,
  projectTechStack: Array<string>
}

const HomeProjectCard: FC<Props> = ({ projectName, projectTechStack }) => {
  const [techStack, setTechStack] = useState("");

  useEffect(() => {
    if (projectTechStack && projectTechStack.length > 0) {
      setTechStack(projectTechStack.join(" "));
    }
  }, [projectTechStack]);

  return (
    <div className={`mix all ${techStack} col-span-12 portrait:md:col-span-6 landscape:col-span-6 landscape:md:col-span-4 lg:col-span-4 h-52 rounded-7px bg-teal-500 cursor-pointer overflow-hidden relative group`}>
      <Image
        className='!h-full group-hover:scale-110 duration-500'
        src="/images/project-1.jpg"
        alt="project"
        width={600}
        height={600}
      />

      <div className="w-full h-full bg-projectOverlay backdrop-blur-[3px] absolute bottom-full left-1/2 -translate-x-1/2 grid place-content-center text-center text-white tracking-wider duration-500 group-hover:bottom-0 ease-out capitalize">
        <p className="text-sm font-light mb-1.5">project</p>
        <h3 className="text-2xl font-medium">{projectName}</h3>
      </div>
    </div>
  )
}

export default HomeProjectCard