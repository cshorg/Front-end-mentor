import { useState } from 'react'

function Alert({ picture, name, activity, event, comment, time, img, checked, onCheckedChange }) {

  const handleCheckedChange = () => {
    onCheckedChange();
  };

  return (
    <section className={`alert-container ${checked ? 'checked' : ''}`} onClick={handleCheckedChange}>
      <div className='alert-info'>
        <img className='alert-image' src={picture} alt={name} />
        <div className='alert-data'>
          <div className='user-wrapper '>
            <p>
              <strong>{name} </strong>
              {activity}
              {event && <b> {event}</b>}
            </p>
            {checked && <div className='alert-dot'></div>}
          </div>
          <div className='alert-time'>
            {time}
          </div>
          {comment && <div className='alert-comment'>{comment}</div>}
        </div>
      </div>

      {img && <img className='alert-picture' src={img} />}
    </section>
  )
}

export default Alert