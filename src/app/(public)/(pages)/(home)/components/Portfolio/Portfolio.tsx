"use client";

import { CompTitle, Container, FilterButtons, HomeProjectCard } from '@/app/core';
import React, { FC, useEffect, useRef } from 'react';
import { AllProjects } from '@/statics/AllProjects';
import mixitup from 'mixitup';

type Props = {};

const Portfolio: FC<Props> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className='py-10 md:py-70'>
      <CompTitle title={AllProjects.title} sub_title={AllProjects.sub_title} />
      <Container>
        <FilterButtons projectFilters={AllProjects.projectFilters} />
        {/* project cards */}
        <div ref={containerRef} className="grid grid-cols-12 gap-4 mt-6 md:mt-10 min-h-56">
          {AllProjects.projects?.map(({ id, projectName, projectTechStack }) => (
            <HomeProjectCard key={id} projectName={projectName} projectTechStack={projectTechStack} />
          ))}
        </div>
        {/* project cards */}
      </Container>
    </section>
  );
};

export default Portfolio;
