import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";


function InfoCard({ title, timeframes }) {

  return (
    <section className={`card-section ` + title}>

			<div className='card-data'>
				<div className="card-header">
					<div className="card-header-title">
						{title}
					</div>
					<span>
						<FontAwesomeIcon icon={faEllipsis} size='lg' />
					</span>
				</div>

				<div className="card-hours">
					<div className='card-current-hours'>
						{timeframes.current + 'hrs'}
					</div>
					<p>
						Last Week - {timeframes.previous + 'hrs'}
					</p>
				</div>
			</div>

    </section>
  )
}

export default InfoCard