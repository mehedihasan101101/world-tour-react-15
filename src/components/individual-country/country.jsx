import './country.css'

export default function Country({country}){
    console.log(country)
const {name,flags} = country;
       return(
  
        <>
        <div className="individual-container">            
            <img src={flags.png} alt="" />
            <h1>name: {name.common} </h1>

        </div>
        </>
       )
}