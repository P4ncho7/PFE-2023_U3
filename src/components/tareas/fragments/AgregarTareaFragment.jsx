import react, { useState } from "react"

const AgregarTareaFragment = ({nombreTarea, handleModificarTarea, handleBotonAgregarTarea}) => {
    return (
        <>
         <div className="col-12">
                    <label htmlFor="nombre-tarea">Añadir nueva tarea</label>
                    <input type="text" 
                    onChange={handleModificarTarea} 
                    className="form-control my-2" 
                    id="nombre-tarea" 
                    value={nombreTarea}
                    />

                    <button type="button" 
                    className="btn btn-primary"
                    onClick={handleBotonAgregarTarea}
                    >Añadir</button>
                </div>
        </>
    )
}

export default AgregarTareaFragment