import React , {useState} from 'react'
import './Home.css'


export default function Home() {
    const [city,setCity] = useState('pune')
  return (

    <div>
       
       <h1 className='App-title'>Weather App 🌩️</h1>

       <input className="search-bar" type="search" 
       placeholder='Enter City ...'
       value={city}
       onChange={(e)=>{
          setCity(e.target.value)
       }}/>
       
       <h1 className='Temprature-text'>Temprature</h1>

    </div>
  )
}

