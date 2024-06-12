import React from 'react';
import './ContectForm.css';

const ContectForm = () => {
  return (
    <div className='contact-form-content'>
      <form>
        <div className='name-container'>
          <input type='text' name='First name' placeholder='First Name' />
          <input type='text' name='Last name' placeholder='Last Name' />
        </div>
        <input type='text' name='Email' placeholder='Email' />
        <textarea name='message' placeholder='Message' rows={3} />
        <button>SEND</button>
      </form>
    </div>
  );
}

export default ContectForm;
