import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
    
  }, [])


  let filterCountries =[]

  if (countries.length > 0 & filterName.length > 0) {
    filterCountries = countries.filter(country => country.name.common.toLowerCase().includes(filterName))
  }
  

  return (
    <div>
      <Filter filterName={filterName} onChange={(e) => setFilterName(e.target.value)} />
      <CountryList countries={filterCountries} />
    </div>
  );
}

export default App;
