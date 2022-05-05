import React, { useContext, useEffect } from 'react';
import {Typography } from '@mui/material';
import './style.css';
import RepsStarred from '../../components/RepsStarred';
import { ReposFavContext } from '../../common/context/ReposFav';
import { UsuarioContext } from '../../common/context/Usuario';
import { BuscarReposFav } from '../../API';

function RepositoriosFav() {

    const { reposFav, setReposFav } = useContext(ReposFavContext);
    const { usuario } = useContext(UsuarioContext);

    useEffect(() => {
        window.scroll(0, 0)
        BuscarReposFav(usuario, setReposFav)
      }, []);

    return (
        <div className='reps_fav__bloco'>
            
            <Typography variant="h3" align="center" className="reps_fav__titulo">Repositórios Favoritos</Typography>
            
            <RepsStarred repos={ Array.from(reposFav) } />

        </div>
    );
}

export default RepositoriosFav;