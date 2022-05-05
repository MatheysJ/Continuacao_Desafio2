import React, { useContext, useEffect } from 'react';
import {Typography } from '@mui/material';
import './style.css';
import RepsStarred from '../../components/RepsStarred';
import { ReposFavContext } from '../../common/context/ReposFav';

function RepositoriosFav() {

    const { reposFav } = useContext(ReposFavContext);

    return (
        <div className='reps_fav__bloco'>
            
            <Typography variant="h3" align="center" className="reps_fav__titulo">Repositórios Favoritos</Typography>
            
            <RepsStarred repos={ Array.from(reposFav) } />

        </div>
    );
}

export default RepositoriosFav;