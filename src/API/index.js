import Axios from "axios";

export const api = Axios.create({
    baseURL: 'http://localhost:3000'
})

export const Buscar = async(usuario, setDado) => {
    await api
        .get(`https://api.github.com/users/${usuario}`, {
            headers: {
                'Authorization' : `token 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`
            }
        })
        .then(response => {
            setDado(response.data)
        })
        .catch(err => {
            /* console.log(`Esse é o erro que deu: ${err}`)
            console.log(`Esse é para ser o código de erro: ${err.response.status}`) */
        })
}

export const BuscarRepos = async(usuario, setDado) => {
    await api.get(`https://api.github.com/users/${usuario}/repos`, {
        headers: {
            'Authorization' : `token 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`
        }
    })
    .then(response => {
        setDado(response.data)
    })
    .catch(err => {
        /* console.log(`Esse é o erro que deu: ${err}`)
        console.log(`Esse é para ser o código de erro: ${err.response.status}`) */
    })
}

//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
//Token, ele só vai funcionar por 90 dias, a partir do dia 01/05/2022