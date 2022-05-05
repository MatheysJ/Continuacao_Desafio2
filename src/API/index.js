import Axios from "axios";

export const api = Axios.create({
    baseURL: 'http://localhost:3000'
})

export const Buscar = async(usuario, setDado) => {
    const token = "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";
    await api
        .get(`https://api.github.com/users/${usuario}`, {
            headers: {
                'Authorization' : `token ${token}`
            }
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
    const token = "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";
    await api.get(`https://api.github.com/users/${usuario}/repos`, {
        headers: {
            'Authorization' : `token ${token}`
        }
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
    const token = "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";
    await api.get(`https://api.github.com/users/${usuario}/starred`, {
        headers: {
            'Authorization' : `token ${token}`
        }
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

//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
//Token, ele só vai funcionar por 90 dias, a partir do dia 01/05/2022