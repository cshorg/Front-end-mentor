import { useEffect, useState } from 'react'
import Button from './Button'

function Advice() {
	const [data, setData] = useState(null)

	const handleClick = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
	}

  return (
    <main className='container'>
			{data && (
				<section className='container-data'>
					<div className="advice-title">
						Advice #{data.slip.id}
					</div>
					<div className="advice-quote">
					“{data.slip.advice}”
					</div>
				</section>
			)}

			<div className='divider'></div>

			<section>
				<Button handleClick={handleClick} />
			</section>
    </main>
  )
}

export default Advice