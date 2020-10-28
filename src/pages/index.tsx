import React from 'react'
import NextImage from 'next/image'

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
          width={521}
          height={694}
        />
        <MediaMatch greaterThan="large">
          <S.Shape
            x="10%"
            y="10%"
          >
            <NextImage
              src='/img/shapes/rectangle_1.svg'
              alt="Rectangle shape"
              unsized
            />
          </S.Shape>
          <S.Shape
            x="90%"
            y="10%"
          >
            <NextImage
              src='/img/shapes/rectangle_2.svg'
              alt="Square shape"
              unsized
            />
          </S.Shape>
          <S.Shape
            x="-10%"
            y="80%">
            <NextImage
              src='/img/shapes/circle.svg'
              alt="Circle shape"
              unsized
            />
          </S.Shape>
          <S.Shape
            x="90%"
            y="60%">
            <NextImage
              src='/img/shapes/polygon.svg'
              alt="Polygon shape"
              unsized
            />
          </S.Shape>
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
              <S.TestimonialImage
                src="/img/testimonials.svg"
                alt={i18n.t('testimonials_image_alt')}
                width={450}
                height={393}
              />
            </S.TestimonialImageWrapper>
          </MediaMatch>
        </S.TestimonialDescriptionWrapper>
        <S.SliderWrapper data-aos="fade-up" {...Animations.baseAosAnimation}>
          <Slider>
            <Testimonional
              author='George Mueller'
              testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit vitae elit sed gravida in ut nam orci. Amet sit nunc, facilisi viverra. Rhoncus accumsan vulputate ultrices risus tellus ante viverra dictum. Pellentesque et molestie rhoncus ultrices diam ipsum rhoncus tellus gravida. Mollis enim nam diam.'
              authorImage='/img/me/george_brooklyn_bridge.png'
              job='Fullstack developer'
              company='Amazing Company'
            />
            <Testimonional
              author='George Mueller'
              testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit vitae elit sed gravida in ut nam orci. Amet sit nunc, facilisi viverra. Rhoncus accumsan vulputate ultrices risus tellus ante viverra dictum. Pellentesque et molestie rhoncus ultrices diam ipsum rhoncus tellus gravida. Mollis enim nam diam.'
              authorImage='/img/me/george_brooklyn_bridge.png'
              job='Fullstack developer'
              company='Amazing Company'
            />
            <Testimonional
              author='George Mueller'
              testimonial='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit vitae elit sed gravida in ut nam orci. Amet sit nunc, facilisi viverra. Rhoncus accumsan vulputate ultrices risus tellus ante viverra dictum. Pellentesque et molestie rhoncus ultrices diam ipsum rhoncus tellus gravida. Mollis enim nam diam.'
              authorImage='/img/me/george_brooklyn_bridge.png'
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
