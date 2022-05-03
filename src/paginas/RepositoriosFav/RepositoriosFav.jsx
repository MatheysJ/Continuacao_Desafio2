import React, { useContext, useEffect } from 'react';
import { Buscar, BuscarRepos, BuscarReposFav } from '../../API';
import { Button, Typography } from '@mui/material';
import './style.css'
import { ReposContext } from '../../common/context/Repos';
import { UsuarioContext } from '../../common/context/Usuario';
import { DadosContext } from "../../common/context/Dados";
import Repositorio from '../../components/Repositorio';
import { ReposFavContext } from '../../common/context/ReposFav';
/* import { Link } from "react-router-dom"; */

function RepositoriosFav() {

    /* const { repos, setRepos } = useContext(ReposContext); */
    const { reposFav, setReposFav } = useContext(ReposFavContext);
    const { usuario } = useContext(UsuarioContext);
    /* const { dados, setDados } = useContext(DadosContext); */

    useEffect(() => {
        BuscarReposFav(usuario, setReposFav);
        window.scroll(0, 0)
      }, []);

    return (
        <div className='reps_fav__bloco'>
            
            <Typography variant="h3" align="center" className="reps_fav__titulo">Repositórios Favoritos</Typography>
            
            <Repositorio repos={ Array.from(reposFav) } />

        </div>
    );
}

export default RepositoriosFav;