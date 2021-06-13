import React from 'react';
import './Postit.css';
import ButtonPostIt from '../ButtonPostIt/ButtonPostIt';

const PostIt = ({postitId, moverALaPapelera, editarPostit, deletePostit,mostrarBoard}) => {
    let postit = JSON.parse(localStorage.getItem(postitId))

    
    return (
        <div className="prueba">
            <p>Título: <span>{ postit.titulo }</span></p>
             <p>Fecha: <span>{ postit.date }</span></p>
            <p>Descripción: <span>{ postit.descripcion }</span></p>

            <ButtonPostIt
                postitId={postitId}
                moverALaPapelera={moverALaPapelera}
                editarPostit={editarPostit}
                deletePostit={deletePostit}
                mostrarBoard={mostrarBoard}
            />
           
            {/* <button
                onClick={() => editarPostit(postitId)} >
                Edit Post-It
            </button>

            <button
                onClick={() => moverALaPapelera(postitId)} >
                To Trush Bin
            </button>

            <button
                onClick={() => deletePostit(postitId)} >
                Delete Post-It
            </button> */}

            
        </div>
    )
}

export default PostIt;
