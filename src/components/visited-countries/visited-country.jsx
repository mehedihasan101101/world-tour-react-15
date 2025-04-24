import './visited-countries.css'
export default function VisitedList({ totalVisitedCountry }) {
  console.log(totalVisitedCountry)
  return (
    <>

      <div id="visited-country-container">

          <h3>Total Visited: {totalVisitedCountry.length} </h3>

        <div className='container-liked-country'>
          {totalVisitedCountry.map((individual) => (

            <div className='single-liked-country'>
              <img src={individual.flags.png} alt="" />
              <p>Name: {individual.name.common} </p>
            </div>
          ))}
        </div>

      </div>

    </>
  )
}