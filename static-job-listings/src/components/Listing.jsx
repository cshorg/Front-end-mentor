import { useState } from 'react'

function Listing({ updateParent, company, logo, newb, featured, position, role, level, postedAt, contract, location, languages, tools }) {
	const combined = [role, level].concat(languages, tools);

	const handleClick = (lang) => {
		updateParent(lang)
	}

  return (
		<section className={`listing-container ${featured ? 'featured' : ''}`}>
			<div className='listing-wrapper'>
				<div className='listing-logo'>
					<img src={logo} alt="company-logo" />
				</div>
				<div className='listing-info'>
					<div className='info-header'>
						<div className='info-company'>
							{company}
						</div>
						{newb && <div className='info-new'>new!</div>}
						{featured && <div className='info-featured'>featured</div>}
					</div>
					<div className='info-position'>
						<p>{position}</p>
					</div>
					<div className='info-footer'>
						<div>
							{postedAt}
						</div>
						<div className='grey-dot'></div>
						<div>
							{contract} 
						</div>
						<div className='grey-dot'></div>
						<div>
							{location}
						</div>
					</div>
				</div>
			</div>
			<div className='listing-lang'>
				{combined.map((lang, index) => (
					<div onClick={() => handleClick(lang)} className='lang' key={index}>
						{lang}
					</div>
				))}
			</div>
		</section>
	)
}

export default Listing
