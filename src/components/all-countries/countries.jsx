import "./countries.css"
import { useEffect, useState } from "react"
import Country from "../individual-country/country";



export default function Countries(){
    const [countries,setCountries]= useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data)
    )
    },[])

   return(
    <>
     <h3>Total Countries: {countries.length} </h3>
     <div className="all-countries-container">
       { countries.map(singular=><Country country={singular}></Country>)}
     </div>
    </>
   )
}