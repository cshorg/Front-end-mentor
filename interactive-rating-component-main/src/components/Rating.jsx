import { useState } from 'react'

function Rating() {
  const [rating, setRating] = useState({one: false, two: false, three: false, four: false, five: false})
  const [value, setValue] = useState(0)
  const [submit, setSubmit] = useState(true)
  const [selected, setSelected] = useState(-1)

  const handleRating = (key, i) => {
    const newRating = {...rating}
    newRating[key] = true
    setRating(newRating)

    setSelected(i)
    setValue(i + 1)
  }

  const handleSubmit = () => {
    if (value <= 0) {
      return
    }
    setSubmit(false)
  } 

  return (
    <>
      {submit  
        ? <main className='rating-container'>
            <header className='rating-header'>
              <img src="images/icon-star.svg" alt="" />
            </header>
            <section className='rating-info'>
              <h1>
                How did we do?
              </h1>
              <p>
                Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!
              </p>
            </section>
            <ul className='rating-list'>
              {Object.keys(rating).map((key, i) => (
                <li className={selected === i ? 'selected' : ''} onClick={() => handleRating(key, i)} key={i}>
                  {i + 1}
                </li>
              ))}
            </ul>
            <button onClick={() => handleSubmit()} className='submit-btn'>
              Submit
            </button>
          </main> 
        : <main className='thankyou-container'>
            <header className='thankyou-header'>
              <img src="images/illustration-thank-you.svg" alt="" />
            </header>
            <section className='thankyou-info'>
              <p className='thankyou-selected'>
                You selected {value} out of 5
              </p>
              <h1 className='thankyou-title'>
                Thank you!
              </h1>
              <p className='thankyou-desc'>
                We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch!
              </p>
            </section>
          </main>
      }
    </>
  )
}

export default Rating