import {useState} from 'react'
import Button from "./Button"
import CountryDetail from './CountryDetail'

const Country = ({ country }) => {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <div>{country.name.common} <Button toggle={showDetail} onToggle={() => setShowDetail(!showDetail)} />
        {showDetail && <CountryDetail country={country}/>}
        </div>
    )
}

export default Country