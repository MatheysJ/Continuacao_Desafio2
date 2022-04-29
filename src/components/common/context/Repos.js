import { createContext, useState } from "react";

export const ReposContext = createContext();
ReposContext.displayName = "Repositórios";

export const ReposProvider = ({ children }) => {
    const [ repos, setRepos ] = useState("");

    return (
        <ReposContext.Provider value={{ repos, setRepos}}>
            { children }
        </ReposContext.Provider>
    )
}