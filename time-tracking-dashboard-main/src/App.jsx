import { useState } from 'react'
import useFetch from './hooks/useFetch'
import ProfileCard from './components/ProfileCard'
import InfoCard from './components/InfoCard'
import './sass/app.scss'

function App() {
  const [tab, setTab] = useState('monthly')
  const [data] = useFetch('src/assets/data/data.json')
  const timeframeMap = {
    daily: 'daily',
    weekly: 'weekly',
    monthly: 'monthly'
  }

  const handleTab = (current) => {
    setTab(current)

    console.log(current)
  }

  return (
    <main className='container'>
      <ProfileCard tab={tab} handleTab={handleTab}/>

      <div className="card-container">
        {data?.map((item, index) => (
          <InfoCard 
            key={index} 
            title={item.title} 
            timeframes={item.timeframes[timeframeMap[tab]]}
          /> 
        ))}
      </div>
    </main>
  )
}

export default App