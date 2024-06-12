import React from 'react';
import './SkillCard.css';

const SkillCard = ({ iconUrl, title, isActive, onClick }) => {
  return (
    <div className={`skills-card ${isActive ? 'active' : ''}`}onClick={()=>onClick()}>
      <img src={iconUrl} alt={title} />
      <h6>{title}</h6>
    </div>
  );
};

export default SkillCard;
