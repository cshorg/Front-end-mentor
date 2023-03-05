function Card({ country }) {
  return (
    <div className="card-container">
      <div className="card-country-flag">
        <img src={country.flags.png} alt="" />
      </div>
      <div className="card-info">
        <h3>{country.name}</h3>
        <div className="card-stats">
          <div className="data">
            Population:&nbsp;
            <p>{country.population.toLocaleString("en-US")}</p>
          </div>
          <div className="data">
            Region:&nbsp;
            <p>{country.region}</p>
          </div>
          <div className="data">
            Capital:&nbsp;
            <p>{country.capital}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
