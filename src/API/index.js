import Axios from "axios";

export function Buscar(nome){
    Axios
        .get(`https://api.github.com/users/${nome}`)
        .then((res) => {
            console.log(res.data);
        })
}