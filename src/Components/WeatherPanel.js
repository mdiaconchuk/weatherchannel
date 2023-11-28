import React from 'react'
import { useState } from 'react'
import FormSearch from './FormSearch';
import Card from './Card';

const WeatherPanel = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=406d4f4f18605911b45c9feb2091f96b&lang=es";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=406d4f4f18605911b45c9feb2091f96b&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("")

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        // Weather
        urlWeather = urlWeather + cityUrl + loc

        await fetch(urlWeather).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((weatherData) => {
            console.log(weatherData)
            setWeather(weatherData)
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        // Forecast

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData)
            setForecast(forecastData)

            setLoading(false);
            setShow(true);

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }

    return (
        <div>
        <FormSearch
            newLocation = {getLocation}
        />
        <Card
            showData = {show}
            loadingData = {loading}
            weather = {weather}
        />
        </div>        
        );
}

export default WeatherPanel