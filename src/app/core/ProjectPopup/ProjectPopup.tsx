import Link from 'next/link';
import React, { FC } from 'react'
import { Button } from '../Button';
import Image from 'next/image';

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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const ProjectPopup: FC<Props> = ({ projectData }) => {
  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-14">
      <div className="col-span-12 md:col-span-7 h-60 md:h-popupGallery relative">
        {
          projectData?.projectDetails?.projectMockups?.map(({ id, mockup }) => (
            <div key={id} className="w-full h-full shadow-resumeShadow">
              <Image
                src={mockup}
                alt="project"
                className="object-cover w-full h-full object-left-top"
                width={500} height={500} />
            </div>
          ))
        }
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full py-5 flex">
          <div className="w-2 h-2 bg-primary rounded-full cursor-pointer mx-2 relative before:w-5 before:h-5 before:bg-transparent before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:border-2 before:border-primary before:rounded-full" />
          <div className="w-2.5 h-2.5 bg-secondary-400 rounded-full cursor-pointer mx-3 relative before:w-5 before:h-5 before:bg-transparent before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:border-2 before:border-transparent before:rounded-full" />
        </div>
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