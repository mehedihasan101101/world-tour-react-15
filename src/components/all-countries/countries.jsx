import "./countries.css"
import { useEffect, useState } from "react"
import Country from "../individual-country/country";



export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data)
      )
  }, [])

  return (
    <>
      <h3 className="total-count">Total Countries: {countries.length} </h3>
      <div id="all-countries-wrapper">

        <div className="all-countries-container">
          {countries.map(singular => <Country country={singular}></Country>)}
        </div>
        <div id="visited-country-container">
          
        </div>

      </div>

    </>
  )
}