import './visited-countries.css'
export default function VisitedList({ totalVisitedCountry, deleteBtnEventHandler }) {

  return (
    <>

      <div id="visited-country-container">

        <h3>Total Visited: {totalVisitedCountry.length} </h3>

        <div className='container-liked-country'>
          {totalVisitedCountry.map((individual) => (

            <div className='single-liked-country' key={individual.name.common}>
              <div className='btn-container'>
                <button className='btn-delete' onClick={() => deleteBtnEventHandler(individual.name.common)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                  <path fill='' d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg></button>
              </div>

              <img src={individual.flags.png} alt="" />
              <p>Name: {individual.name.common} </p>
            </div>
          ))}
        </div>

      </div>

    </>
  )
}