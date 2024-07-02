import Link from 'next/link';
import React, { FC } from 'react'
import { Button } from '../Button';
import Image from 'next/image';
import useSlider from '@/hooks/useSlider';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type DesignerInfo = {
  uiDesignerName: string,
  uiDesignerSource: string
}
type ProjectMockup = {
  id: number,
  mockup: string
}

type ProjectDetails = {
  client: string,
  designSource: string,
  sourceCode: string,
  projectCompleteDate: string,
  liveLink: string,
  designSourceTitle: string,
  industry: string,
  technologies: Array<string>,
  projectMockups: Array<ProjectMockup>,
  designerInfo: DesignerInfo
}

type ProjectData = {
  projectDescription: string,
  projectLink: string,
  projectDetails: ProjectDetails,
}

type Props = {
  projectData?: ProjectData,
}

const ProjectPopup: FC<Props> = ({ projectData }) => {
  const { scrollNext, scrollPrev, settings, sliderRef, Slider } = useSlider();
  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-14">
      <div className="col-span-12 group md:col-span-7 h-60 md:h-popupGallery relative cursor-pointer shadow-resumeShadow">

        <Slider
          ref={sliderRef}
          {...settings}
          className='h-full overflow-clip'
        >
          {projectData?.projectDetails?.projectMockups?.map(({ id, mockup }) => (
            <div key={id} className="w-full h-full shadow-resumeShadow">
              <Image
                src={mockup}
                alt="project"
                className="object-cover w-full h-full object-left-top"
                width={500} height={500} />
            </div>
          ))}
        </Slider>

        <button
          className='w-6 h-6 lg:w-9 lg:h-9 absolute top-1/2 left-0 translate-x-3 -translate-y-1/2 cursor-pointer bg-slate-100 rounded-full grid place-content-center shadow-lg duration-200 opacity-100 lg:opacity-0 group-hover:opacity-100'
          onClick={scrollPrev}
          aria-label='Scroll to previous'
        >
          <MdKeyboardArrowLeft className='text-xl lg:text-3xl text-secondary-600' />
        </button>
        <button
          className='w-6 h-6 lg:w-9 lg:h-9 absolute top-1/2 right-0 -translate-x-3 -translate-y-1/2 cursor-pointer bg-slate-100 rounded-full grid place-content-center shadow-lg duration-200 opacity-100 lg:opacity-0 group-hover:opacity-100'
          onClick={scrollNext}
          aria-label='Scroll to next'
        >
          <MdKeyboardArrowRight className='text-xl lg:text-3xl text-secondary-600' />
        </button>

      </div>
      <div className="col-span-12 md:col-span-5 capitalize">
        <div className="">
          <h4 className="text-lg font-semibold text-secondary-600 mb-1.5">project info :</h4>
          <p className="text-base text-secondary-300 leading-6 normal-case">{projectData?.projectDescription}</p>
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-secondary-600 mb-1">Project Details :</h4>
          <ul className="">
            <li className="py-2.5 text-secondary-300 border-b-2 border-[#DADADA]"><span className='mr-2 text-secondary-700 font-medium'>client:</span>{
              projectData?.projectDetails?.client === "" ? "Practice Project" : projectData?.projectDetails?.client
            }</li>
            <li className="py-2.5 text-secondary-300 border-b-2 border-[#DADADA]"><span className='mr-2 text-secondary-700 font-medium'>Industry:</span>{projectData?.projectDetails?.industry}</li>
            <li className="py-2.5 text-secondary-300 border-b-2 border-[#DADADA]"><span className='mr-2 text-secondary-700 font-medium'>Technologies:</span>{projectData?.projectDetails?.technologies.join(", ")}</li>
            <li className="py-2.5 text-primary border-b-2 border-[#DADADA]"><span className='mr-2 text-secondary-700 font-medium'>UI/UX Designer:</span>
              <Link target="_blank" href={projectData?.projectDetails?.designerInfo?.uiDesignerSource || '#'} className="">{projectData?.projectDetails?.designerInfo?.uiDesignerName}</Link>
            </li>
            <li className="py-2.5 text-primary border-b-2 border-[#DADADA]"><span className='mr-2 text-secondary-700 font-medium'>design source:</span>
              <Link href={projectData?.projectDetails?.designSource || '#'} className="">{projectData?.projectDetails?.designSourceTitle}</Link>
            </li>
            <li className="py-2.5 text-primary border-b-2 border-[#DADADA]"><span className='mr-2 text-secondary-700 font-medium'>source code:</span>
              <Link href={projectData?.projectDetails?.sourceCode || '#'} className="">open Github</Link>
            </li>
            <li className="py-2.5 text-secondary-300 border-b-2 border-[#ffffff]"><span className='mr-2 text-secondary-700 font-medium'>project completion date:</span>{projectData?.projectDetails?.projectCompleteDate}</li>
          </ul>
          <div className="flex justify-end mt-7">
            <Button target='_blank' btnTitle="Open Project" href={projectData?.projectLink} className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPopup