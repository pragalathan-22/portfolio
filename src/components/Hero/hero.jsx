import React from 'react'
import './hero.css'

const hero = () => {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>Building Digital Experience That Inspire</h2>
        <p>Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p>
      </div>
      <div className='hero-img'>
        <div>
          <div className='tech-icon'>
            <img src='./assets/images/icons8-react-js-64.png' alt=''/>
          </div>
          <img src='./assets/images/itachi-phone-purple-silhouette-4cml63q2jfomxgoz.jpg' alt=''/>
        </div>
        <div>
          <div className='tech-icon'>
            <img src='./assets/images/icons8-html-48.png' alt=''/>
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/icons8-css-48.png' alt=''/>
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/icons8-javascript-48.png' alt=''/>
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/icons8-python-48.png' alt=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default hero
