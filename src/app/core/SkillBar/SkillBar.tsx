"use client";
import React, { FC } from 'react'
import styled from 'styled-components';

type Props = {
  skillName?: string
  proficiency?: number
}

const SkillBarContainer = styled.div`
  width: 100%;
  background-color: #E9ECEF;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const SkillBarInner = styled.div<{ proficiency: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--primary);
  border-radius: inherit;
  width: ${props => props.proficiency}%;
`;

const SkillBar: FC<Props> = ({ skillName, proficiency = 0 }) => {
  return (
    <>
      <div className="font-medium text-sm md:text-base text-secondary-600 capitalize mb-1.5 md:mb-2.5 flex items-center justify-between">
        <span>{skillName}</span>
        <span>{`${proficiency}%`}</span>
      </div>
      <SkillBarContainer>
        <SkillBarInner proficiency={proficiency} />
      </SkillBarContainer>
    </>
  )
}

export default SkillBar