import React, {Fragment, useState} from 'react';
import './CreadorDePostits.css';
import {v4 as uuid} from "uuid";

const CreadorDePostits = ({agregarPostIt}) => {
    //Funcion permite re-escribir el objeto de actualizar Post-it (se usa esta funcion cuando el usuario esta
    //escribiendo en el form):
    const [ postit, actualizarPostIt ] = useState({
        titulo: '',
        date: '',
        descripcion: '',
        active: true
    })

    //crea un state para mostrar el mensaje de error (form vacio o incompleto)
    const [ error, actualizarError ] = useState(false)

    //Funcion que se ejecuta cada vez que el usuario escribe en un imput:
    const actualizarState = (evento) => {
        actualizarPostIt({
            ...postit,
            [evento.target.name] : evento.target.value
        })
    }

    //Extraer los valores escritos por el usuario:
    const { titulo, date, descripcion } = postit;

    //Cuando el usuario presiona el botón de enviar formulario (dentro de esta funcion tengo sub-func):
    const submitPostIt = (evento) => {
        evento.preventDefault();

        // Hacer todas las validaciones
        if(titulo.trim() === '' || date.trim() === '' || descripcion.trim() === '') {
            actualizarError(true)
            return;
        }

        // una vez que se validaron los datos quiero que se elimine el mensaje previo del error
        actualizarError(false)

        // Asignar un ID
        postit.id=uuid();

        // Crear el post-it y colocarlo en el state principal (hay que crearlo)
        agregarPostIt(postit)

        // Reiniciar el formulario despues de crear el post-it
        actualizarPostIt({
            titulo: '',
            date: '',
            descripcion: '',
            active: true
        })
    }


    return (
        <Fragment>
        { error ? <p className="alertaError">Todos los campos son obligatorios</p> : null }

            <form 
                className="creador"
                onSubmit={submitPostIt}    
            >
                <label className="etiqueta">Título</label>
                <input
                    type="text"
                    name="titulo"
                    onChange={actualizarState}
                    value={titulo}
                />

                <label className="etiqueta">Fecha</label>
                <input
                    type="date"
                    name="date"
                    onChange={actualizarState}
                    value={date}
                />

                <label className="etiqueta">Descripción</label>
                <textarea
                    type="text"
                    name="descripcion"
                    onChange={actualizarState}
                    value={descripcion}
                ></textarea>

                <button
                    className="boton"
                    type="submit"
                >Agregar Post-it</button>
            </form>
        </Fragment>
    )
}

export default CreadorDePostits;
