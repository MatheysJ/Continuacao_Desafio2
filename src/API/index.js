import Axios from "axios";

export function Buscar(nome){
    Axios
        /* 
        Atualmente a variável ${nome} pode ser passada com caracteres especiais, como / . ?
        Esses carcteres podem trazem vúlnerabilidade na aplicação, como no caso de uma injeção de código.
        Lembrar de tratar os dados passados nesse input antes de enviar a requisição pra API de preferência, Regex, 
        validação de formulário
        */
        
        .get(`https://api.github.com/users/${nome}`)
        .then((res) => {
            console.log(res.data);
        })
}

/* 
    Adicionar de alguma forma uma busca utilizando `https://api.github.com/users/${nome}/repos` 
    Fazer mais uma função? Manipular o parâmetro nome na hora de chamá-la? 
    Aproveitando, um contexto é necessário?
*/