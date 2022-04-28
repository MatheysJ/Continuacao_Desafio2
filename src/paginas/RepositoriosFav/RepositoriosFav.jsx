import React from 'react';
/* import { Buscar } from '../../API'; */
import { Typography } from '@mui/material';
import './style.css'
/* import { Link } from "react-router-dom"; */

function RepositoriosFav() {
    return (
        <div className='reps_fav__bloco'>
            
            <Typography variant="h3" align="center" className="reps_fav__titulo">Repositórios Favoritos</Typography>
            
            <div className='reps_fav__container'>
                <Typography variant="h5" align="center">Estes são os repositórios favoritos do usuário</Typography>
            </div>

        </div>
    );
}

export default RepositoriosFav;