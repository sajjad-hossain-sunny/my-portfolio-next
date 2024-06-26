"use client";
import React, { FC, useState } from 'react'

type ProjectFilter = {
  id: string | number;
  title: string
  filter: string
}

type Props = {
  projectFilters?: Array<ProjectFilter>;
};

const FilterButtons: FC<Props> = ({ projectFilters }) => {
  const [selected, setSelected] = useState('all');

  const handleClick = (selection: any) => () => {
    setSelected(selection);
  };

  return (
    <ul className='flex landscape:justify-center md:justify-center w-full overflow-x-auto'>
      {
        projectFilters?.map(({ id, title, filter }) => (
          (
            <li key={id} className=''>
              <button
                onClick={handleClick(filter)}
                className={`capitalize px-2 md:px-4 py-0.5 md:py-1.5 duration-500 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:rounded-md after:transition-transform after:duration-300 after:ease-out after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left hover:text-primary select-none ${
                  selected === filter ? 'after:scale-x-100 after:origin-bottom-left text-primary' : 'after:scale-x-0 text-secondary-200'
                } whitespace-nowrap overflow-hidden text-ellipsis truncate`}
                type='button'
                data-filter={`.${filter}`}
              >{title}</button>
            </li>
          )
        ))
      }
    </ul>
  )
}

export default FilterButtons