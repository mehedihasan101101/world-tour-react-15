import "./countries.css"
import { useEffect, useState } from "react"
import Country from "../individual-country/country";
import VisitedList from "../visited-countries/visited-country";



export default function Countries() {


  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data)
      )
  }, []);

  const [visitedCountryData, setVisitedData] = useState([])
  let visitedCountryList = (countryDetail) => {
    const listOfVisitedCountry = [...visitedCountryData, countryDetail];
    setVisitedData(listOfVisitedCountry);
  }

  function deleteOperation(targetCountry) {
    const filteredVisitedList = visitedCountryData.filter(n => {
      return n.name.common !== targetCountry;

    })
    setVisitedData(filteredVisitedList);

  }



  return (
    <>
      <h3 className="total-count">Total Countries: {countries.length} </h3>
      <div id="all-countries-wrapper">

        <div className="all-countries-container">
          {countries.map(singular => {
            const isVisited = visitedCountryData.some(x =>singular.name.common == x.name.common);
            return (
              <Country isVisited ={isVisited} country={singular} getVisitedList={visitedCountryList} key={singular.name.common}>  </Country>
            )
          } )}
        </div>
        <VisitedList deleteBtnEventHandler={deleteOperation} totalVisitedCountry={visitedCountryData}></VisitedList>
      </div>

    </>
  )
}