import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import ArchiveIcon from '@material-ui/icons/Archive';

const ButtonPostIt = ({postitId, moverALaPapelera, editarPostit, deletePostit,mostrarBoard}) => {



    return (
        <div>
        {mostrarBoard ?    
            (<ArchiveIcon
                onClick={() => moverALaPapelera(postitId)}              
            />)
            :
            (<RestoreFromTrashIcon
                onClick={() => moverALaPapelera(postitId)}               
            />)
        }

        {mostrarBoard ?
            (<EditIcon
                id="boton"
                className='icon-button'
                onClick={() => {editarPostit(postitId)}}
            />)
            :
            (<DeleteIcon 
                variant="contained"
                type="button"
                id="boton"
                className='icon-button'
                onClick={() => {deletePostit(postitId)}}
            />)} 
        </div>
    )
}

export default ButtonPostIt;
