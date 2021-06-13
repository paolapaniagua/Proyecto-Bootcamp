import React, {useState} from 'react';
import PostIt from '../PostIt/PostIt';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Button } from '@material-ui/core';
import '../TrushBin/TrushBin.css';

const TrushBin = ({mostrarBoard}) => {

    const botonCambiar = () => {
        mostrarBoard(true);
    }

    const postitIds = () => {
        let ids = { ...localStorage };
        return Object.keys(ids).filter(s => s.includes('removed'))
    }

    const [allpostits, guardarAllPostIts] = useState(postitIds);

    const moverALaPapelera = (postitId) => {
        
        let postit = JSON.parse(localStorage.getItem(postitId))
        localStorage.removeItem(postitId);
        localStorage.setItem('active-' + postit.id, JSON.stringify(postit))
        
        guardarAllPostIts(postitIds);
    }

    //editar un post-it
    const deletePostit = (postitId) => {
        localStorage.removeItem(postitId);

        guardarAllPostIts(postitIds);
    }


    
    return (
        <div>
            <div id="trushbin">
                <h2>TrushBin</h2>
                {allpostits.map(postitId => (
                    <PostIt
                        key={ postitId }
                        postitId={ postitId }
                        moverALaPapelera={moverALaPapelera}
                        deletePostit={deletePostit}
                    />
                ))}
            </div>

            <Button 
                variant="contained"
                type="button"
                id="boton"
                className='icon-button'
                
                onClick={ () => botonCambiar() }
                endIcon={<ArrowBackIosIcon/>}
            >Workspace
            </Button>
        </div>
    )
}

export default TrushBin;
