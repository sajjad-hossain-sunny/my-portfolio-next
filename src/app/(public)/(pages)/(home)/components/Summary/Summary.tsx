import React, { FC } from 'react'
import { ButtonBorder, CompTitle, Container, SkillBar, SummaryCard } from '@/app/core'
import { Summary_Contents } from '@/statics/Summary_Contents'
import { AllSkills } from '@/statics/AllSkills'

type Props = {}

const Summary: FC<Props> = () => {
  return (
    <section className='pt-14 md:pt-73 pb-12 md:pb-67'>
      <CompTitle title={Summary_Contents.title} sub_title={Summary_Contents.sub_title} />
      <Container >
        <div className="grid grid-cols-2 gap-x-6 landscape:gap-x-5 landscape:lg:gap-x-6 landscape:xl:gap-x-8 lg:gap-x-6 xl:gap-x-8 gap-y-7 md:gap-y-10">
          {
            Summary_Contents?.summmary?.map(({ id, summaryTitle, cards }) => (
              <div key={id} className="col-span-2 landscape:col-span-1 md:col-span-1 flex flex-col gap-y-5">
                <h3 className="text-xl md:text-2xl font-semibold text-secondary-600 capitalize">{summaryTitle}</h3>
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
            <h3 className="text-xl md:text-2xl font-semibold text-secondary-600 capitalize mb-5">Academic courses</h3>
            <div className="grid grid-cols-2 gap-x-6 landscape:gap-x-5 landscape:lg:gap-x-6 landscape:xl:gap-x-8 lg:gap-x-6 xl:gap-x-8 gap-y-5">
              {
                Summary_Contents?.courses?.cards?.map(({ id, duration, institute, course, description }) => (
                  <div key={id} className="col-span-2 landscape:col-span-1 md:col-span-1 flex flex-col gap-y-5">
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
          <div className="col-span-2">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary-600 capitalize mb-5">{AllSkills.title2}</h3>
            <div className="grid grid-cols-2 gap-x-6 landscape:gap-x-5 landscape:lg:gap-x-6 landscape:xl:gap-x-8 lg:gap-x-6 xl:gap-x-8 gap-y-5">
              {
                AllSkills?.skills?.map(({ id, skillName, proficiency }) => (
                  <div key={id} className="col-span-2 landscape:col-span-1 md:col-span-1">
                    <SkillBar skillName={skillName} proficiency={proficiency} />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-span-2 grid place-content-center">
            <ButtonBorder title="show all skills" href="/skills"/>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Summary