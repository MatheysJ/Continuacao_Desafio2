import Axios from "axios";
/* 
export function Buscar(nome){
    Axios
        
        .get(`https://api.github.com/users/${nome}`)
        .then((res) => {
            const objetoUsuario = res.data;
        })
}

export function BuscarRepos(nome){
    Axios
        .get(`https://api.github.com/users/${nome}/repos`)
        .then((repos) => {
            console.log(repos.data);
        })
}
 */

export const api = Axios.create({
    baseURL: 'http://localhost:3000'
})

export const Buscar = async(usuario, setDado) => {
    const resposta = await api.get(`https://api.github.com/users/${usuario}`)
    /* .catch(funtion (error) {
        if (error.response) {
            console.log(error.reponse.data)
        }
    }) */
    setDado(resposta.data)
}

export const BuscarRepos = async(usuario, setDado) => {
    const resposta_repos = await api.get(`https://api.github.com/users/${usuario}/repos`)
    setDado(resposta_repos.data)
}