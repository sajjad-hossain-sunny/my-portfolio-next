"use client";
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react'

type Props = {
  id: number,
  onClick: (id: number) => void,
  projectName: string,
  projectType: string,
  projectTags: Array<string>,
  thumbnail: string
}

const HomeProjectCard: FC<Props> = ({
  onClick,
  id,
  projectName,
  projectType,
  projectTags,
  thumbnail
}) => {
  const [techStack, setTechStack] = useState("");

  useEffect(() => {
    if (projectTags && projectTags.length > 0) {
      setTechStack(projectTags.join(" "));
    }
  }, [projectTags]);

  const handleClick = () => {
    onClick(id);
  }
  return (
    <div onClick={handleClick} className={`mix all ${techStack} col-span-12 portrait:md:col-span-6 landscape:col-span-6 landscape:xl:col-span-4 lg:col-span-4 h-52 landscape:md:h-56 landscape:xl:h-48 rounded-7px cursor-pointer overflow-hidden relative group shadow-resumeShadow`}>
      <Image
        className='group-hover:scale-110 duration-500 object-cover w-full h-full'
        src={thumbnail}
        alt="project"
        width={600}
        height={600}
      />

      <div className="w-full h-full bg-projectOverlay backdrop-blur-[3px] absolute bottom-full left-1/2 -translate-x-1/2 grid place-content-center text-center text-white tracking-wider duration-500 group-hover:bottom-0 ease-out capitalize">
        <p className="text-sm font-light">project</p>
        <h3 className="text-2xl font-medium mt-1.5 mb-0.5">{projectName}</h3>
        <h3 className="text-sm">{projectType}</h3>
      </div>
    </div>
  )
}

export default HomeProjectCard
