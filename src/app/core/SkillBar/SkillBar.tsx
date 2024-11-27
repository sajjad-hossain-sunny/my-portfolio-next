"use client";
import React, { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type Props = {
  skillName?: string;
  proficiency?: number;
};

const SkillBar: FC<Props> = ({ skillName, proficiency = 0 }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentBarRef = barRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && currentBarRef) {
            gsap.fromTo(
              currentBarRef,
              { width: '0%' },
              { width: `${proficiency}%`, duration: 1 }
            );
          } else if (currentBarRef) {
            gsap.to(currentBarRef, { width: '0%', duration: 0 });
          }
        });
      },
      {
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    if (currentBarRef) {
      observer.observe(currentBarRef);
    }

    return () => {
      if (currentBarRef) {
        observer.unobserve(currentBarRef);
      }
    };
  }, [proficiency]);

  return (
    <>
      <div className="font-medium text-sm md:text-base text-secondary-600 capitalize mb-1.5 md:mb-2.5 flex items-center justify-between">
        <span>{skillName}</span>
        <span>{`${proficiency}%`}</span>
      </div>
      <div className="h-2 w-full bg-[#E9ECEF] rounded overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-primary rounded duration-0"
          style={{ width: '0%' }} // Initially set to 0
        ></div>
      </div>
    </>
  );
};

export default SkillBar;
