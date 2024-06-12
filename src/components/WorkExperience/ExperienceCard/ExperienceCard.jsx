import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({details}) => {
  return (
    <div className='work-experience-card'>
        <h5>{details.title}</h5>
        <div className='work-duration'>{details.date}</div>

        <ul>
            {details.responsibilities.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ExperienceCard
