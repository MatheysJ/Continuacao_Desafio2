import Axios from "axios";

export function Buscar(nome){
    Axios
        /* 
        Lembrar de tratar os dados passados nesse input antes de enviar a requisição pra API de preferência, Regex, 
        validação de formulário
        */
        
        .get(`https://api.github.com/users/${nome}`)
        .then((res) => {
            console.log(res.data);
        })
}

export function BuscarRepos(nome){
    Axios
        .get(`https://api.github.com/users/${nome}/repos`)
        .then((repos) => {
            console.log(repos.data);
        })
}