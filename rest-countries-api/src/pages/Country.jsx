import { useParams } from "react-router-dom"
import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import Button from "../components/Button"

function Country() {
  const { data } = useContext(MainContext)
  const { country } = useParams()

  const info = data.find((count) => count.name === country)

  return (
    <div className="country">
      <Button text={"Back"} icon={true} style={false} link={"/"} />
      <div className="country-data">
        <div className="country-flag">
          <img src={info.flags.svg} alt={`${info.name} flag`} />
        </div>
        <div className="country-side-panel">
          <h2>{info.name}</h2>
          <div className="country-side-panel-data">
            <div className="country-stats">
              <p>
                <strong>Native Name: </strong>
                {info.nativeName}
              </p>
              <p>
                <strong>Population: </strong>
                {info.population.toLocaleString("en-US")}
              </p>
              <p>
                <strong>Region: </strong>
                {info.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {info.subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {info.capital}
              </p>
            </div>
            <div className="country-data-panel">
              <p>
                <strong>Top Level Domain: </strong>
                {info.topLevelDomain}
              </p>
              <div className="country-currencies">
                <strong>Currencies:&nbsp;</strong>
                {info.currencies &&
                  info.currencies.map((currency, index) => (
                    <p key={index}>
                      {currency.name}
                      {index < info.currencies.length - 1 ? `, ` : ""}
                    </p>
                  ))}
              </div>
              <div className="country-languages">
                <strong>Languages:&nbsp;</strong>
                {info.languages &&
                  info.languages.map((language, index) => (
                    <p key={index}>
                      {language.name}
                      {index < info.languages.length - 1 ? ", " : ""}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          <div className="country-borders">
            {info.borders && (
              <div className="border-header">Border Countries:</div>
            )}
            <div className="border-list">
              {info.borders &&
                info.borders.map((border, index) =>
                  data.find((count) => count.alpha3Code === border) ? (
                    <Button
                      text={
                        data.find((count) => count.alpha3Code === border).name
                      }
                      icon={false}
                      link={`/${
                        data.find((count) => count.alpha3Code === border).name
                      }`}
                      key={index}
                    />
                  ) : (
                    <Button text={border} icon={false} key={index} />
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country
