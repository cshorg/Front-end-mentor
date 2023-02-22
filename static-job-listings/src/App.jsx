import { useState, useEffect } from 'react'
import Listing from './components/Listing'
import Filter from './components/Filter'
import './sass/app.scss'

function App() {
	const [data, setData] = useState(null)
  const [filteredData, setFilteredData] = useState(null)
  const [filter, setFilter] = useState([])

  const updateParent = (lang) => {
    if (filter.length <= 4 && !filter.includes(lang)) {
      const updateFilter = [...filter, lang]
      setFilter(updateFilter)
    }
  }

  const handleRemove = (index) => {
    const updateFilter = [...filter]
    updateFilter.splice(index, 1)
    setFilter(updateFilter)
  }

  const handleRemoveAll = () => {
    setFilter([])
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('public/data.json')
      const json = await response.json()
  
      if (response.ok) {
        setData(json)
      }
    }
  
    fetchData()
  }, [])
  
  useEffect(() => {
    if (data !== null) {
      let filteredListings = data.filter(listing => {
        let matchAll = true
        filter.forEach(keyword => {
          if (!listing.languages.concat(listing.tools, [listing.role, listing.level]).includes(keyword)) {
            matchAll = false
          }
        })
        return matchAll
      })
      setFilteredData(filteredListings)
    }
  }, [data, filter])
  return (
    <>
      <main className="main">

        {filter.length > 0 
          ? <section className='filter-container'>
              <div className='filter-wrapper'>
                {filter.map((item, index) => (
                  <Filter key={index} handleRemove={handleRemove} item={item} index={index}/>
                ))}
              </div>
              <div onClick={() => handleRemoveAll()} className='filter-clear'>Clear</div>
            </section>
          : <div></div>
        }

        {filteredData && filteredData.map((listing, index) => (
          <Listing 
            key={index} 
            company={listing.company} 
            logo={listing.logo} 
            newb={listing.new} 
            featured={listing.featured}
            position={listing.position}
            role={listing.role}
            level={listing.level}
            postedAt={listing.postedAt}
            contract={listing.contract}
            location={listing.location}
            languages={listing.languages}
            tools={listing.tools}
            updateParent={updateParent}
          />
        ))}
      </main>
    </>
  )
}

export default App