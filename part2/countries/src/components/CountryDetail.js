import Weather from "./Weather"

const CountryDetail = ({ country }) => {
    let languages =[]
      for (const key in country.languages) {
        languages.push(country.languages[key])
      }
    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <div>
                <h3>languages: </h3>
                {languages.map(lang => <li key={Math.random()}>{lang}</li>)}
            </div>
        <img src={country.flags.svg} alt='flag' width='100px' />
        <Weather capital={country.capital} />
        
        </div>
    )
}

export default CountryDetail