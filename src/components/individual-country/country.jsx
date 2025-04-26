

import './country.css'

export default function Country({country,getVisitedList,isVisited}) {
    const { name, flags, capital, area, continents, languages, population } = country;
    
    
    
    function visitStateControl(){
 
          getVisitedList(country);
    } 
    return (

        <>
            <div className="individual-container">
                <img src={flags.png} alt="" />
                <p>Name: {name.common} </p>
                <p>Capital: {capital} </p>
                <p>Area: {area} km²</p>
                <p>Continent: {continents} </p>
                <p>Language: {languages ? Object.values(languages)[0] : "N/A"} </p>
                <p>Population: {population} </p>
                
                <hr></hr>

                <div>
                <button onClick={visitStateControl}  disabled={isVisited} className='btn-visited'>Visited</button>
                </div>
            </div>

        </>
    )
}