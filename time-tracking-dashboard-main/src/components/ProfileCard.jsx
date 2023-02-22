import { useState } from 'react'

function ProfileCard({ tab, handleTab }) {

  return (
    <section className='profile-container'>

			<div className='profile-header'>
				<img src="public/images/image-jeremy.png" alt="Jeremy" />
				<div className='profile-info'>
					<p>Report for</p>
					<h1>Jeremy Robson</h1>
				</div>
			</div>

			<div className='profile-footer'>
				<button className={`btn ${tab === 'daily' ? 'active' : ''}`} onClick={() => handleTab('daily')}>Daily</button>
				<button className={`btn ${tab === 'weekly' ? 'active' : ''}`} onClick={() => handleTab('weekly')}>Weekly</button>
				<button className={`btn ${tab === 'monthly' ? 'active' : ''}`} onClick={() => handleTab('monthly')}>Monthly</button>
			</div>

    </section>
  )
}

export default ProfileCard