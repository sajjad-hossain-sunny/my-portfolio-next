"use client";

import { ButtonBorder, CompTitle, Container, FilterButtons, HomeProjectCard, Popup, ProjectPopup } from '@/app/core';
import React, { FC, useEffect, useRef, useState } from 'react';
import { AllProjects } from '@/statics/AllProjects';
import mixitup from 'mixitup';

type Props = {};

const Portfolio: FC<Props> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [projectData, setProjectData] = useState<any>({});

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      import('mixitup').then((mixitup) => {
        const mixer = mixitup.default(containerRef.current, {
          selectors: {
            target: '.mix',
          },
          animation: {
            duration: 300,
          },
        });

        return () => {
          mixer.destroy();
        };
      });
    }
  }, []);

  const handleClick = (cardId: number) => {
    setPopupOpen(true);
    const project = AllProjects.projects.find((project) => project.id === cardId);
    setProjectData(project);
  }

  return (
    <section className='pt-14 md:pt-73 pb-12 md:pb-67'>
      <CompTitle title={AllProjects.title} sub_title={AllProjects.sub_title} />
      <Container>
        <FilterButtons projectFilters={AllProjects.projectFilters} />
        {/* project cards */}
        <div ref={containerRef} className="grid grid-cols-12 gap-5 mt-6 md:mt-10 min-h-56">
          {AllProjects.projects?.map(({ id, projectName, projectType, projectTags, thumbnail }) => (
            <HomeProjectCard
              key={id}
              id={id}
              onClick={() => handleClick(id)}
              projectName={projectName}
              projectType={projectType}
              projectTags={projectTags}
              thumbnail={thumbnail}
            />
          ))}
        </div>
        <div className="col-span-2 flex justify-center mt-7 md:mt-10">
          <ButtonBorder title="show more projects" href="/projects" />
        </div>
        {/* project cards */}
      </Container>

      {/* popup */}
      <Popup title={projectData.projectName} popupOpen={popupOpen} setPopupOpen={setPopupOpen} >
        <ProjectPopup projectData={projectData} />
      </Popup>
      {/* popup */}
    </section>
  );
};

export default Portfolio;
