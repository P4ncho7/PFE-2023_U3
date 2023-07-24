import React, { useState } from "react"
import AgregarTareaFragment from "./fragments/AgregarTareaFragment"
import MostrarTareaFragment from "./fragments/MostrarTareaFragment"

const ListaEjemplo = [
    {
        id: 1,
        nombre: 'Alimentar a los leones'
    },
    {
        id: 2,
        nombre: 'Jugar con las químeras'
    },
    {
        id: 3,
        nombre: 'Mimir'
    }
]

const Tareas = () => {
    const [tareas, setTareas] = useState(ListaEjemplo)
    const [nombreTarea, SetNombreTarea] = useState('')

    const handleModificarTarea = (evento) => {
        console.log(evento.target.value)
        SetNombreTarea(evento.target.value)
    }

    const handleBotonAgregarTarea = (evento) => {
        if (nombreTarea === '') {
            alert('Debes escribir una tarea')
        } else {
            let tareaNueva = {
                id: tareas.length + 1,
                nombre: nombreTarea
            }

                setTareas([...tareas, tareaNueva])
                SetNombreTarea('')
        }
    }

    const handleEliminarTarea = (id) => {
        let tareasFiltradas = tareas.filter(tarea =>{
            return tarea.id !== id
        })
        setTareas(tareasFiltradas)
    }

    return (

        <>
            <div className="row">
                <div className="col-12">
                    <h1>Tareas</h1>
                </div>

                <AgregarTareaFragment 
                nombreTarea={nombreTarea}
                handleModificarTarea={handleModificarTarea}
                handleBotonAgregarTarea={handleBotonAgregarTarea}
                />

                <div className="col-12 mt-4"> 
                    <h2>Lista de tareas</h2>
                </div>
               
                <MostrarTareaFragment 
                tareas={tareas}
                handleEliminarTarea={ handleEliminarTarea}
                />

            </div>
        </>
    )
}

export default Tareas