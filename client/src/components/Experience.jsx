import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { experiences_icons } from '../constants'
import { SectionWrapper } from '../hoc/SectionWrapper'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience, icon }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={icon}
          alt={experience.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p
        className='text-secondary text-[16px] font-semibold'
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:3000/experiences')
      .then(res => {
        setdata(res.data)
        console.log(typeof res.data)
      })

      .catch(err => console.log(err))
  }, [])
  let count = 0
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {data.map((experience, index) => {
            const currentCount = count
            count++
            return (
              <ExperienceCard
                key={index}
                experience={experience}
                icon={experiences_icons[currentCount].icon}
              />
            )
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
