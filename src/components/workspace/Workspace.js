import React, {useState} from 'react';
import PostIt from '../PostIt/PostIt';
import Modal from '../Modal/Modal';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import '../workspace/Workspace.css'

const Workspace = ({mostrarBoard}) => {

    //función para pasar de board
    const botonCambiar = () => {
        mostrarBoard(false);
    }

    const postitIds = () => {
        let ids = { ...localStorage };
        return Object.keys(ids).filter(s => s.includes('active'))
    }

    //arreglo de los post-its
    //const filtered_ids = Object.keys(postItsIniciales).filter(s => s.includes('active'));
    const [allpostits, guardarAllPostIts] = useState(postitIds);
    

    //función que tome los post-its creados y agrega el nuevo
    const agregarPostIt = (postit) => {
       // guardar un posit
        let postitId = 'active-' + postit.id
        localStorage.setItem(postitId, JSON.stringify(postit));

        guardarAllPostIts(postitIds);
    }

    //función para seleccionar un post-its y moverlo a la papelera
    const moverALaPapelera = (postitId) => {
        
        let postit = JSON.parse(localStorage.getItem(postitId))
        localStorage.removeItem(postitId);
        localStorage.setItem('removed-' + postit.id, JSON.stringify(postit))
        
        guardarAllPostIts(postitIds);
    }

    //editar un post-it
    const editarPostit = (postitId) => {
        console.log(postitId)
    }

    const checkIfEmpty = () => {
        let ids = { ...localStorage }
        let removedIds = Object.keys(ids).filter(s => s.includes('removed'))
        return removedIds.length > 0;
    }

    const [visible, setVisible] = useState(false);
    

    return (
        <div id="workspacea">
            <h2 className="">Workspace</h2>
            <div className="workspace">
                <div className="espacioForm">
                    <h3>Formulario para crear Post-its</h3>
                    <div className="button-postit">
                        <button 
                            className="button" 
                            onClick ={() => setVisible(true)}
                        >Crear Post-It Note</button>
                        <Modal 
                            show={visible} 
                            onClose={() => setVisible(false)}
                            agregarPostIt={agregarPostIt}
                        />                        
                    </div>
                </div>
                <div className="cajanotitas">
                    <h3>Lista de Post-its</h3>              
                    {allpostits.map(postitId => (
                        <PostIt
                            className="notita"
                            key={ postitId }
                            postitId={ postitId }
                            moverALaPapelera={moverALaPapelera}
                            editarPostit={editarPostit}
                            mostrarBoard={mostrarBoard}
                        />
                      ))}
                </div>
            </div>
            <button 
                type="button"
                onClick={ () => botonCambiar() }
                >Trash Bin</button>

                {checkIfEmpty() ?
                    (<DeleteIcon/>)
                    :
                    ((<DeleteOutlineIcon/>))
                }    

        </div>
    )
}

export default Workspace;