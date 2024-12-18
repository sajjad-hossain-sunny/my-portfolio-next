import React, { FC } from 'react'

type Duration = {
  startMonth?: string;
  endMonth?: string;
  startYear?: number;
  endYear?: number;
};

type Props = {
  duration?: Duration
  institute?: string
  major?: string
  course?: string
  description?: string
  company?: string
  position?: string
}

const SummaryCard: FC<Props> = ({ duration, institute, major, course, description, company, position }) => {
  const startMonth = duration?.startMonth;
  const endMonth = duration?.endMonth;
  const modifiedStartMonth = startMonth?.slice(0, 3);
  const modifiedEndMonth = endMonth?.slice(0, 3);

  return (
    <div className="w-full rounded-5px shadow-resumeShadow p-3.5 xl:p-5 pb-4 capitalize cursor-pointer duration-500 min-h-44 overflow-hidden relative before:absolute before:-top-1/2 before:-left-[145px] before:bg-primary before:w-6 md:before:w-7 before:h-[500px] before:opacity-35 before:duration-500 before:rotate-[35deg] hover:before:left-full hover:before:translate-x-[180%] md:hover:before:translate-x-16 hover:scale-[1.03] xl:hover:scale-105">
      <div className="text-xs font-normal text-white py-5px px-13px rounded-5px bg-primary inline-block mb-3.5">
        {`${modifiedStartMonth} ${duration?.startYear} - ${modifiedEndMonth} ${duration?.endYear}`}
      </div>
      <h2 className="text-xl md:text-22 xl:text-25 font-medium text-secondary-600">{`${course? course : company}`}</h2>
      <h6 className="text-sm xl:text-base text-customRed mt-1 mb-0.5">{`${institute? institute : company}`}</h6>
      <h3 className="text-base xl:text-lg font-medium text-secondary-600">{`${major? major : ""}`}</h3>
      <p className="text-secondary-200 text-xs">{`${description? description : ""}`}</p>
    </div>
  )
}

export default SummaryCard