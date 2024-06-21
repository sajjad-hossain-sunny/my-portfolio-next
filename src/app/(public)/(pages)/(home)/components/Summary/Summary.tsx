import React, { FC } from 'react'
import { ButtonBorder, CompTitle, Container, SkillBar, SummaryCard } from '@/app/core'
import { Summary_Contents } from '@/statics/Summary_Contents'
import { AllSkills } from '@/statics/AllSkills'

type Props = {}

const Summary: FC<Props> = () => {
  return (
    <section className='py-10 md:py-70'>
      <CompTitle title={Summary_Contents.title} sub_title={Summary_Contents.sub_title} />
      <Container >
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          {
            Summary_Contents?.summmary?.map(({ id, summaryTitle, cards }) => (
              <div key={id} className="col-span-1 flex flex-col gap-y-5">
                <h3 className="text-2xl font-semibold text-secondary-600 capitalize">{summaryTitle}</h3>
                {
                  cards?.map(({ id, duration, institute, major, course, description, company, position }) => (
                    <SummaryCard
                      key={id}
                      duration={duration}
                      institute={institute}
                      major={major}
                      course={course}
                      description={description}
                      company={company}
                      position={position}
                    />
                  ))
                }
              </div>
            ))
          }
          <div className="col-span-2">
            <h3 className="text-2xl font-semibold text-secondary-600 capitalize mb-5">Academic courses</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {
                Summary_Contents?.courses?.cards?.map(({ id, duration, institute, course, description }) => (
                  <div key={id} className="col-span-1 flex flex-col gap-y-5">
                    <SummaryCard
                      key={id}
                      duration={duration}
                      institute={institute}
                      course={course}
                      description={description}
                    />
                  </div>
                ))
              }
            </div>

          </div>
          <div className="col-span-2 ">
            <h3 className="text-2xl font-semibold text-secondary-600 capitalize mb-5">{AllSkills.title2}</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5">
              {
                AllSkills?.skills?.map(({ id, skillName, proficiency }) => (
                  <div key={id} className="col-span-1">
                    <SkillBar skillName={skillName} proficiency={proficiency} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-span-2 grid place-content-center">
            <ButtonBorder />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Summary