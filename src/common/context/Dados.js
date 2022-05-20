import { createContext, useState } from "react";

export const DadosContext = createContext();
DadosContext.displayName = "Dados";

export const DadosProvider = ({ children }) => {
    const [ dados, setDados ] = useState("");
    const [ repos, setRepos ] = useState("");
    const [ reposFav, setReposFav ] = useState("");
    const [ usuario, setUsuario ] = useState("");
    const [ loading, setLoading ] = useState(true);

    return (
        <DadosContext.Provider value={{ dados, setDados, repos, setRepos, reposFav, setReposFav, usuario, setUsuario, loading, setLoading}}>
            { children }
        </DadosContext.Provider>
    )
}
