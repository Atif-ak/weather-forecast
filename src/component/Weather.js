import React, { useState, useEffect } from 'react'
import './Weather.css'

function Weather() {
    const [city, setCity] = useState("")
    const [search, setSearch] = useState("Kolkata")

    useEffect(()=>{
        const fetchApi = async () =>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4e10978fd7bc3d51d7fd6de6b94d5917`
            const response = await fetch(url)
            const resJson = await response.json()
            setCity(resJson.main)
            console.log(resJson.main)
        }
        fetchApi()
    },[search])
    return (
        <div>
            <h1 id="heading">Weather Forecast</h1>
            {/* <hr/> */}
            <input className="input" onChange={e => setSearch(e.target.value)}/>

            {
                !city ? 
                <p className="error">No Data Found!</p> :
                <>
                <p className="temp">{city.temp}°Cel</p>
                <h2 className="location">
              <i className="fas fa-street-view"></i> {search}
              </h2>
              <p className="minmax">Max : {city.temp_max}°Cel || Min : {city.temp_min}°Cel</p>
              </>
            }
          
        </div>
    )
}

export default Weather
