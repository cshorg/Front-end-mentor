import { useState } from 'react'

function Pricing() {

	const [value, setValue] = useState(1)
	const [price, setPrice] = useState(.50)

	const handleChange = (event) => {
		setValue(event.target.value)
		setPrice(event.target.value * .50)
	}

  return (
    <main className="pricing-container">
			<header className='pricing-header'> 
				<h1>
					Simple, traffic-based pricing!
				</h1>
				<p>
					Sign-up for our 30-day trial. No credit card required. 
				</p>
			</header>
			<section className='pricing-info-container'>
				<div className='pricing-cost'>
					<div className='page-views'>
						{value}K Pageviews
					</div>
					<div className='pricing-info'>
						<div className='price'>
							${price}
						</div>
						<div>
							/month
						</div>
					</div>
				</div>
				<div className="slider-container">
					<input 
						type="range"
						onChange={handleChange}
						min={1} 
						max={100}
						step={1}
						value={value} 
						className="slider"
						style={{
							background: `linear-gradient(to right, 	#a2f3eb 0%, #a2f3eb ${value}%, #ECF0FB ${value}%, #ECF0FB 100%)`
						}}
					/>
				</div>
				<div className='pricing-filters'>
					<div>
						Monthly Billing
					</div>
					<input type="checkbox" id="switch" /><label for="switch">Toggle</label>
					<div className='pricing-billing'>
						<div>
							Yearly Billing
						</div>
						<div className='pricing-discount'>
							25% discount
						</div>
					</div>
				</div>
				<hr />
				<div className='pricing-footer'>
					<ul>
						<li>
							<img src="" alt="" />
							Unlimited websites
						</li>
						<li>
							<img src="" alt="" />
							100% data ownership
						</li>
						<li>
							<img src="" alt="" />
							Email reports
						</li>
					</ul>
					<button className='trial-btn'>
						Start my trial
					</button>
				</div>
			</section>
    </main>
  )
}

export default Pricing