import React from 'react'

import * as S from '@/presentation/styles/pages/home'
import * as Animations from '@/presentation/styles/animations'
import { HighlightBox } from '@/presentation/components/HighlightBox'
import { Heading } from '@/presentation/components/Heading'
import { Achievement, Timeline } from '@/presentation/components/Timeline'
import { Space } from '@/presentation/components/Space'
import { Planet } from '@/presentation/components/Planet'
import { Technology } from '@/presentation/components/Technology'
import { MediaMatch } from '@/presentation/components/MediaMatch'
import { Slider } from '@/presentation/components/Slider'
import { Testimonional } from '@/presentation/components/Testimonional'
import useI18N from '@/presentation/hooks/usei18n'
import { i18n } from '@/data/protocols'

const achievements = (i18n: i18n): Achievement[] => ([
  {
    date: new Date('2020-08-03T00:00:00'),
    title: i18n.t('course_react_solid'),
    description: i18n.t('course_react_solid_description'),
    tag: 'education'
  },
  {
    date: new Date('2020-08-12T00:00:00'),
    title: i18n.t('job_dbc_company'),
    description: i18n.t('job_dbc_company_description'),
    tag: 'professional'
  },
  {
    date: new Date('2020-08-03T00:00:00'),
    title: i18n.t('course_node_solid'),
    description: i18n.t('course_node_solid_description'),
    tag: 'education'
  },
  {
    date: new Date('2020-06-09T00:00:00'),
    title: i18n.t('course_microservices_node'),
    description: i18n.t('course_microservices_node_description'),
    tag: 'education'
  },
  {
    date: new Date('2020-04-20T00:00:00'),
    title: i18n.t('course_go'),
    description: i18n.t('course_go_description'),
    tag: 'education'
  },
  {
    date: new Date('2019-12-10T00:00:00'),
    title: i18n.t('talk_javascript_microservices'),
    description: i18n.t('talk_javascript_microservices_description'),
    tag: 'talk'
  },
  {
    date: new Date('2019-11-27T00:00:00'),
    title: i18n.t('event_tdc_poa_2019'),
    description: i18n.t('event_tdc_poa_2019_description'),
    tag: 'event'
  },
  {
    date: new Date('2019-08-23T00:00:00'),
    title: i18n.t('talk_docker'),
    description: i18n.t('talk_docker_description'),
    tag: 'talk'
  },
  {
    date: new Date('2019-07-06T00:00:00'),
    title: i18n.t('course_docker'),
    description: i18n.t('course_docker_description'),
    tag: 'education'
  },
  {
    date: new Date('2019-04-23T00:00:00'),
    title: i18n.t('event_tdc_floripa_2019'),
    description: i18n.t('event_tdc_floripa_2019_description'),
    tag: 'event'
  },
  {
    date: new Date('2019-02-19T00:00:00'),
    title: i18n.t('education_sprachcaffe'),
    description: i18n.t('education_sprachcaffe_description'),
    tag: 'education'
  },
  {
    date: new Date('2018-11-28T00:00:00'),
    title: i18n.t('job_bimachine'),
    description: i18n.t('job_bimachine_description'),
    tag: 'professional'
  },
  {
    date: new Date('2015-03-01T00:00:00'),
    title: i18n.t('job_cantustange'),
    description: i18n.t('job_cantustange_description'),
    tag: 'professional'
  }
])

const technologies: React.ReactNode[] = [
  <Technology key="react" image="/img/technology/react.png" alt="React" />,
  <Technology key="node" image="/img/technology/nodejs.png" alt="Node JS" />,
  <Technology key="golang" image="/img/technology/golang.png" alt="Golang" />,
  <Technology key="java" image="/img/technology/java.png" alt="Java" />,
  <Technology key="typescript" image="/img/technology/typescript.png" alt="Typescript" />,
  <Technology key="mongo" image="/img/technology/mongo.png" alt="Mongo DB" />,
  <Technology key="aws" image="/img/technology/aws.png" alt="AWS" />,
  <Technology key="docker" image="/img/technology/docker.png" alt="Docker" />,
  <Technology key="postgresql" image="/img/technology/postgresql.png" alt="Postgres SQL" />
]

const Home: React.FC = () => {
  const i18n = useI18N()

  return (
    <S.Wrapper>
      <S.InfoGroup>
        <S.Job data-aos="slide-right" {...Animations.baseAosAnimation}>
          {i18n.t('fullstack')}
        </S.Job>
        <S.PresentationWrapper>
          <S.Presentation>
            {i18n.t('presentation')}
          </S.Presentation>
        </S.PresentationWrapper>
        <S.Description data-aos="fade-up" {...Animations.baseAosAnimation}>
          {i18n.t('presentation_description')}
        </S.Description>
      </S.InfoGroup>

      <S.HighlightGroup>
        <HighlightBox primaryText="2" secondaryText={i18n.t('years_experience')} />
        <HighlightBox primaryText="8" secondaryText={i18n.t('projects_developed')} />
        <HighlightBox primaryText="+10" secondaryText={i18n.t('completed_courses')} />
      </S.HighlightGroup>

      <S.MediaGroup data-aos="fade-up" data-aos-offset="50" {...Animations.baseAosAnimation}>
        <S.Photo
          src="/img/me/george_front.png"
          alt={i18n.t('george_front_alt')}
        />
        <MediaMatch greaterThan="large">
          <S.Shape
            src='/img/shapes/rectangle_1.svg'
            alt="Rectangle shape"
            x="10%"
            y="10%"
          />
          <S.Shape
            src='/img/shapes/rectangle_2.svg'
            alt="Square shape"
            x="90%"
            y="10%"
          />
          <S.Shape
            src='/img/shapes/circle.svg'
            alt="Circle shape"
            x="-10%"
            y="80%"
          />
          <S.Shape
            src='/img/shapes/polygon.svg'
            alt="Polygon shape"
            x="90%"
            y="60%"
          />
        </MediaMatch>
      </S.MediaGroup>

      <S.AboutMe>
        <Heading
          data-aos="slide-right"
          data-aos-offset="10"
          {...Animations.baseAosAnimation}
          data-aos-duration="1000"
        >
          {i18n.t('about_me')}
        </Heading>

        <S.AboutMeContentWrapper>
          <S.HistoryWrapper>
            <S.History>
              <S.Paragraph data-aos="slide-right" {...Animations.baseAosAnimation}>
                {i18n.t('about_me_history_1')}
              </S.Paragraph>

              <S.Paragraph data-aos="slide-right" {...Animations.baseAosAnimation}>
                {i18n.t('about_me_history_2')}
              </S.Paragraph>

              <S.Paragraph data-aos="slide-right" {...Animations.baseAosAnimation}>
                {i18n.t('about_me_history_3')}
              </S.Paragraph>
            </S.History>
          </S.HistoryWrapper>

          <MediaMatch display="flex" greaterThan="medium">
            <S.TimelineWrapper >
              <Timeline
                data-aos="zoom-in-left"
                {...Animations.baseAosAnimation}
                achievements={achievements(i18n)} />
            </S.TimelineWrapper>
          </MediaMatch>
        </S.AboutMeContentWrapper>
      </S.AboutMe>

      <S.Stack>
        <Heading data-aos="slide-right" {...Animations.baseAosAnimation}>{i18n.t('my_stack')}</Heading>
        <Space stars={20}>
          <S.StackPlanetWrapper
            data-aos="fade-up"
            {...Animations.baseAosAnimation}
          >
            <Planet
              orbitElements={technologies}
            />
          </S.StackPlanetWrapper>
        </Space>
      </S.Stack>

      <S.Testimonial>
        <Heading data-aos="slide-right" {...Animations.baseAosAnimation}>{i18n.t('testimonials')}</Heading>
        <S.TestimonialDescriptionWrapper>
          <S.TestimonialDescription data-aos="fade-up" {...Animations.baseAosAnimation}>
            {i18n.t('testimonials_description')}
          </S.TestimonialDescription>
          <MediaMatch greaterThan="medium">
            <S.TestimonialImageWrapper data-aos="fade-up" {...Animations.baseAosAnimation}>
              <S.TestimonialImage src="/img/testimonials.svg" alt={i18n.t('testimonials_image_alt')} />
            </S.TestimonialImageWrapper>
          </MediaMatch>
        </S.TestimonialDescriptionWrapper>
        <S.SliderWrapper data-aos="fade-up" {...Animations.baseAosAnimation}>
          <Slider>
            <Testimonional
              author='George Mueller'
              testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit vitae elit sed gravida in ut nam orci. Amet sit nunc, facilisi viverra. Rhoncus accumsan vulputate ultrices risus tellus ante viverra dictum. Pellentesque et molestie rhoncus ultrices diam ipsum rhoncus tellus gravida. Mollis enim nam diam.'
              authorImage='data:image/jpeg;base64,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'
              job='Fullstack developer'
              company='Amazing Company'
            />
            <Testimonional
              author='George Mueller'
              testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit vitae elit sed gravida in ut nam orci. Amet sit nunc, facilisi viverra. Rhoncus accumsan vulputate ultrices risus tellus ante viverra dictum. Pellentesque et molestie rhoncus ultrices diam ipsum rhoncus tellus gravida. Mollis enim nam diam.'
              authorImage='data:image/jpeg;base64,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'
              job='Fullstack developer'
              company='Amazing Company'
            />
            <Testimonional
              author='George Mueller'
              testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit vitae elit sed gravida in ut nam orci. Amet sit nunc, facilisi viverra. Rhoncus accumsan vulputate ultrices risus tellus ante viverra dictum. Pellentesque et molestie rhoncus ultrices diam ipsum rhoncus tellus gravida. Mollis enim nam diam.'
              authorImage='data:image/jpeg;base64,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'
              job='Fullstack developer'
              company='Amazing Company'
            />
          </Slider>
        </S.SliderWrapper>
      </S.Testimonial>
    </S.Wrapper>
  )
}

export default Home
