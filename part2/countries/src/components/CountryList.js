import Country from "./Country"
import CountryDetail from "./CountryDetail"

const CountryList = ({ countries }) => {    
    let content
    if (countries.length > 10) {
        content = <p>Too many matches, specify another filter</p>
    } else if (countries.length === 1) {
        content = <CountryDetail country={countries[0]}/>
    } else {
        content = countries.map(country => <Country key={country.capital} country={country} /> 
        )
    }

    return (
        <div>
            {content}
        </div>

    ) 
    

}

export default CountryList