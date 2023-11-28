import React from 'react'

function SampleCard() {
    return (
        <div>
            <div class="container text-center m-auto">
                <div class="row align-items-center bg-light rounded w-100">
                    <p class="text-dark">Ciudad.</p>
                    <p>Fecha</p>
                    <div class="col">
                        <div class="card w-auto border-0">
                            <i class="fa-solid fa-cloud pt-3 fs-1"></i>
                            <div class="card-body">
                                <p class="card-text fs-4">Nubes</p>
                                <p class="card-text">Algo nublado</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card w-auto border-0">
                            <i class="fa-solid fa-temperature-full pt-3 fs-1"></i>
                            <div class="card-body">
                                <p class="card-text fs-4">T° Máxima</p>
                                <p class="card-text">33°C</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card w-auto  border-0">
                            <i class="fa-solid fa-temperature-empty  pt-3 fs-1"></i>
                            <div class="card-body">
                                <p class="card-text fs-4">T° Mínima</p>
                                <p class="card-text">25°C</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card w-auto  border-0">
                            <i class="fa-solid fa-cloud pt-3 fs-1"></i>
                            <div class="card-body">
                                <p class="card-text fs-4">Viento</p>
                                <p class="card-text">5.82m/s</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card w-auto  border-0">
                            <i class="fa-solid fa-droplet pt-3 fs-1"></i>
                            <div class="card-body">
                                <p class="card-text fs-4">Humedad</p>
                                <p class="card-text">32%</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card w-auto border-0">
                            <i class="fa-solid fa-gauge pt-3 fs-1"></i>
                            <div class="card-body">
                                <p class="card-text fs-4">Presión atm.</p>
                                <p class="card-text">1007 hPa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SampleCard