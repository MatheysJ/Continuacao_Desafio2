import Axios from "axios";

export const api = Axios.create({
    baseURL: 'http://localhost:3000'
})

export const Buscar = async(usuario, setDado) => {
    await api
        .get(`https://api.github.com/users/${usuario}`, {
        })
        .then(response => {
            setDado(response.data)
            console.log("Buscar chamado")
        })
        .catch(err => {
            setDado('Inválido')
            console.log(`Esse é o erro que deu: ${err}`)
            console.log(`Esse é para ser o código de erro: ${err.response.status}`)
        })
}

export const BuscarRepos = async(usuario, setDado) => {
    await api.get(`https://api.github.com/users/${usuario}/repos`, {
    })
    .then(response => {
        setDado(response.data)
        console.log("BuscarRepos chamado")
    })
    .catch(err => {
        setDado('Inválido')
        console.log(`Esse é o erro que deu: ${err}`)
        console.log(`Esse é para ser o código de erro: ${err.response.status}`)
    })
}

export const BuscarReposFav = async(usuario, setDado) => {
    await api.get(`https://api.github.com/users/${usuario}/starred`, {
    })
    .then(response => {
        setDado(response.data)
        console.log("BuscarReposFav chamado")
    })
    .catch(err => {
        setDado('Inválido')
        console.log(`Esse é o erro que deu: ${err}`)
        console.log(`Esse é para ser o código de erro: ${err.response.status}`)
    })
}