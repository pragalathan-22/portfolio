import React from 'react';
import './ContectMe.css';
import ContectInfoCard from './ContectInfoCard/ContectInfoCard';
import ContectForm from './ContectForm/ContectForm';

const ContectMe = () => {
  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>

      <div className='contact-content'>
        <div className='contact-info'>
          <ContectInfoCard
            iconUrl='./assets/images/icons8-email-48.png'
            text='bakthapragalathan22@gmail.com'
          />
          <ContectInfoCard
            iconUrl='./assets/images/icons8-github-48.png'
            text='https://github.com/pragalathan-22'
          />
        </div>
        <div className='contact-form'>
          <ContectForm />
        </div>
      </div>
    </section>
  );
}

export default ContectMe;
