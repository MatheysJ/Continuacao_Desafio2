import Axios from "axios";
/* import { useContext } from "react";
import { DadosContext } from "../common/context/Dados"; */

export const api = Axios.create({
    baseURL: 'http://localhost:3000'
})

export const Buscar = async(usuario, setDado, setLoading) => {
    await api
        .get(`https://api.github.com/users/${usuario}`, {
        })
        .then(response => {
            setTimeout(() => {
            setDado(response.data)
            console.log("Buscar chamado")
            setLoading(false)
        }, 2000)
        })
        .catch(err => {
            setDado('Inválido')
            console.log(`Esse é o erro que deu: ${err}`)
            console.log(`Esse é para ser o código de erro: ${err.response.status}`)
        })
}

export const BuscarRepos = async(usuario, setDado, setLoading) => {
    await api.get(`https://api.github.com/users/${usuario}/repos`, {
    })
    .then(response => {
        setTimeout(() => {
            setDado(response.data)
            console.log("BuscarRepos chamado")
            setLoading(false)
        }, 2000)
        console.log("Timer acabou")
    })
    .catch(err => {
        setDado('Inválido')
        console.log(`Esse é o erro que deu: ${err}`)
        console.log(`Esse é para ser o código de erro: ${err.response.status}`)
    })
}

export const BuscarPages = async(usuario, setDado, page, tipo) => {
    await api.get(`https://api.github.com/users/${usuario}/${tipo}?page=${page}`, {        
    })
    .then(response => {
        setDado(response.data)
        console.log("BuscarPages chamado")
        console.log(`A página chamada foi a: ${page}`)
    })
    .catch(err => {
        setDado('Inválido')
        console.log(`Esse é o erro que deu: ${err}`)
        console.log(`Esse é para ser o código de erro: ${err.response.status}`)
    })
}

export const BuscarReposFav = async(usuario, setDado, setLoading) => {
    await api.get(`https://api.github.com/users/${usuario}/starred`, {
    })
    .then(response => {
        setDado(response.data)
        console.log("BuscarReposFav chamado")
        setLoading(false)
    })
    .catch(err => {
        setDado('Inválido')
        console.log(`Esse é o erro que deu: ${err}`)
        console.log(`Esse é para ser o código de erro: ${err.response.status}`)
    })
}