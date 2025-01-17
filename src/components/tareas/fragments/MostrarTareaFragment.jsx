import react, { useState } from "react"

const MostrarTareaFragment = ({ tareas, handleEliminarTarea}) => {
    return (
        <>
         <div>
                <ul className="list-group">
                    {
                        tareas.map(function(tarea){
                            return (
                                <li className="list-group-item" key={tarea.id}>{tarea.nombre}
                                <button type="button" className="btn btn-outline-danger btn-sm ms-1"
                                onClick={()=> handleEliminarTarea(tarea.id)}>Eliminar</button>
                                </li>
                            )

                        })
                    }
                </ul>
                </div>
        </>
    )
}

export default MostrarTareaFragment