import React, { useContext, useEffect } from 'react';
import { Buscar, BuscarRepos } from '../../API';
import { Button, Typography } from '@mui/material';
import './style.css'
import { ReposContext } from '../../components/common/context/Repos';
import { UsuarioContext } from '../../components/common/context/Usuario';
import Repositorio from '../../components/Repositorio';
/* import { Link } from "react-router-dom"; */

function RepositoriosFav() {

    const { repos, setRepos } = useContext(ReposContext);
    const { usuario } = useContext(UsuarioContext);

    useEffect(() => {
        BuscarRepos(usuario, setRepos);
        console.log(repos)
      }, []);

    return (
        <div className='reps_fav__bloco'>
            
            <Typography variant="h3" align="center" className="reps_fav__titulo">Repositórios Favoritos</Typography>
            
            <div className='reps_fav__container'>
                <Typography variant="h5" align="center">Estes são os repositórios favoritos do usuário</Typography>
            </div>
            
            <Repositorio repos={ Array.from(repos) } />

        </div>
    );
}

export default RepositoriosFav;