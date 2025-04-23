import './App.css'
import Countries from './components/all-countries/countries'

function App() {
  return (
    <>
    {/* header */}
      <div className='header-container'>
        <h1 className='header-title'>All Countries of the World</h1>
        <p className='header-des'>Explore a complete list of around 250 countries and territories, including both independent nations and regions with special status. A perfect way to discover the diversity of our world!F</p>
      </div>
      <Countries></Countries>
    </>
  )
}

export default App
