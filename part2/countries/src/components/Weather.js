import { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [weather, setWeather] = useState()

    useEffect(() => {
        axios.get(`http://api.openweathermap.org//data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
            .then(res => {
                setWeather(res.data)
        }).catch( error => console.log(error))
    },[api_key,capital])

    

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <p>temperature {weather && weather.main.temp} Celcius</p>
            <img alt={weather && weather.weather[0].main} src={`http://openweathermap.org/img/wn/${weather && weather.weather[0].icon}@2x.png`} />
            <p>wind {weather && weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather