import React from 'react';
/* import { Buscar } from '../../API'; */
import { Typography } from '@mui/material';
import './style.css'
import { Link } from "react-router-dom";

function Detalhes() {
    return(
        <div className='bloco'>
            
            <Typography variant="h3" align="center" className="titulo">Detalhes</Typography>
            
            <div className='container'>
                <Link to='/repositorios-favoritos'>
                    <Typography variant="h5" align="center" className='botao'>Repositórios favoritos</Typography>
                </Link>
            </div>

        </div>
    );
}

export default Detalhes;