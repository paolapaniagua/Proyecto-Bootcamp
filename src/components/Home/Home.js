import React, {useState}  from 'react';
import Workspace from '../../components/workspace/Workspace';
import TrushBin from '../../components/TrushBin/TrushBin';
import '../Home/Home.css'

const Home = () => {

//definir state
const [mostrarboard, mostrarBoard] = useState(true);

    return(
        <React.Fragment>
            {mostrarboard ? 
                (<Workspace
                    mostrarBoard={mostrarBoard}
                />) 
                : 
                (<TrushBin
                    mostrarBoard={mostrarBoard}
                />)}
                
        </React.Fragment>
    )
}

export default Home;