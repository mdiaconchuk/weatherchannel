import React from 'react'
import { useState } from 'react'
import SampleCard from './SampleCard'

function FormSearch({newLocation}) {

    const [city, setCity] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        if (city === "" || !city) return;

        newLocation(city);
    }

    return (
        <div>

            <div class="container card m-auto my-5 bg-transparent border-0 shadow-lg">

                <form onSubmit={onSubmit}>
                    <div class="mb-3">
                        <label class="form-label mt-3 fs-2">Ingresa una ciudad.</label>
                        <input type="text" placeholder="London" class="form-control w-50 m-auto bg-body-secondary" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setCity(e.target.value)}/>
                        <a href="https://mdiaconchuk.github.io"><p class="form-text position-relative top-0 end-0 mx-5 fst-italic text-opacity-50 text-dark mt-2">Matías Diaconchuk</p></a>
                    </div>
                    <button type="submit" class="btn btn-outline-dark mb-3">Buscar</button>
                </form>
            </div>
            {/* <SampleCard/> */}
        </div>
    )
}

export default FormSearch