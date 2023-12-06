import React from 'react'
import Spinner from './Spinner'

function Card({ loadingData, showData, weather, forecast }) {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    if (loadingData) {
        return <Spinner />
    }

    return (
        <div>
            <div class="mt-5">

                {
                    showData === true ? (
                        <div class="container my-5 text-center m-auto">
                        <div class="row align-items-center bg-light rounded bg-transparent border-0 shadow-lg"> 
                            <p class="fs-2 mt-3 fw-bold">{weather.name}</p>
                            <p class="fw-bold">Lat {weather.coord.lat}, Lon {weather.coord.lon}</p>
                            <p class="fs-5">{date}</p>
                            <div class="col">
                                <div class="card w-auto border-0 bg-transparent ">
                                    <i class="fa-solid fa-user pt-3 fs-1"></i>
                                    <div class="card-body">
                                        <p class="card-text fs-4">Sensación</p>
                                        <p class="card-text">{Math.round(weather.main.feels_like -273.15)} °C</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card w-auto bg-transparent border-0">
                                    <i class="fa-solid fa-temperature-full pt-3 fs-1"></i>
                                    <div class="card-body">
                                        <p class="card-text fs-4">T° Máxima</p>
                                        <p class="card-text">{Math.round(weather.main.temp_max -273.15)} °C</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card w-auto  border-0 bg-transparent ">
                                    <i class="fa-solid fa-temperature-empty  pt-3 fs-1"></i>
                                    <div class="card-body">
                                        <p class="card-text fs-4">T° Mínima</p>
                                        <p class="card-text">{Math.round(weather.main.temp_min -273.15)} °C</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card w-auto  border-0 bg-transparent ">
                                    <i class="fa-solid fa-wind pt-3 fs-1"></i>
                                    <div class="card-body">
                                        <p class="card-text fs-4">Viento</p>
                                        <p class="card-text">{weather.wind.speed} m/s</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card w-auto  border-0 bg-transparent ">
                                    <i class="fa-solid fa-droplet pt-3 fs-1"></i>
                                    <div class="card-body">
                                        <p class="card-text fs-4">Humedad</p>
                                        <p class="card-text">{weather.main.humidity}%</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card w-auto border-0 bg-transparent">
                                    <i class="fa-solid fa-gauge pt-3 fs-1"></i>
                                    <div class="card-body">
                                        <p class="card-text fs-4">Presión atm.</p>
                                        <p class="card-text">{weather.main.pressure} hPa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    ) : (
                        <p className='text-light fs-2 text-danger'>Sin datos.</p>
                    )
                }

            </div>
        </div>
    )
}

export default Card