import './country.css'

export default function Country({ country }) {
    console.log(country)
    const { name, flags, capital, area, continents } = country;
    return (

        <>
            <div className="individual-container">
                <img src={flags.png} alt="" />
                <p>Name: {name.common} </p>
                <p>Capital: {capital} </p>
                <p>Area: {area} km²</p>
                <p>Continent: {continents} </p>
                <hr></hr>
                <div>
                    <button className='btn-visited'>Visited</button>
                </div>
            </div>

        </>
    )
}