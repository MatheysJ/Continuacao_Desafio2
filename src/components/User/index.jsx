/* import { Avatar } from '@mui/material';
import React, { useContext } from 'react';
import { Buscar } from '../../API';
import { DadosContext } from '../../common/context/Dados';
import { UsuarioContext } from '../../common/context/Usuario';



function UserInfo(user) {
    const { usuario, setUsuario } = useContext(UsuarioContext);
    const { dados, setDados } = useContext(DadosContext);
    
    Buscar(usuario, setDados)

    if (dados !== ""){
        return(
            <div className=''>
                <div><Avatar className="imagem_detalhes" alt="Avatar de usuário" src={dados.avatar_url} sx={{ width: 180, height: 180}} /></div>
                <div><span>{dados.name}</span></div>
            </div>
        );
    }
    else {
        return(
            <span>O usuário informado é inválido.</span>
        );
    }

}

export default UserInfo; */