import { Button } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { BuscarPages } from '../../API';
import { DadosContext } from '../../common/context/Dados';
import './style.css'

function mudarPagina(usuario, setRepos, pagina){
    BuscarPages(usuario, setRepos, pagina, "repos")
}

function Paginas() {
    
    const { dados, usuario, repos, setReposFav, setRepos } = useContext(DadosContext);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        setPagina(1)
        console.log(dados)
        console.log('teste')
    }, [dados.login])


      if (dados.public_repos > 20) {

        return(
          <div className="botoes-paginas">
            <div className='anterior-proximo'>

              <Button 
                variant="outlined"  
                disabled={pagina === 1}
                color="inherit" 
                className="botao-lista-repositorios"
                onClick={() => {
                  setPagina(pagina - 1)
                  mudarPagina(usuario, setRepos, (pagina - 1), "repos")
              }}
              >
                Anterior
              </Button>
              {/* <Button 
                variant="outlined" 
                color={pagina === 1 ? "info" : "inherit"} 
                className="botao-lista-repositorios"
                
                onClick={() => {
                  if (pagina !== 1) {
                      setPagina(1)
                      mudarPagina(usuario, setRepos, 1, "repos")
                  }
              }}
              >
                1
              </Button>
              <Button 
                variant="outlined" 
                color={pagina === 2 ? "info" : "inherit"} 
                className="botao-lista-repositorios"
                onClick={() => {
                  if (pagina !== 2) {
                      setPagina(2)
                      mudarPagina(usuario, setRepos, 2, "repos")
                  }
              }}
              >
                2
              </Button>
              <Button 
                variant="outlined" 
                color={pagina === 3 ? "info" : "inherit"} 
                className="botao-lista-repositorios"
                onClick={() => {
                  if (pagina !== 3) {                    
                      setPagina(3)
                      mudarPagina(usuario, setRepos, 3, "repos")
                  }
              }}
              >
                3
              </Button> */}
              <Button 
                variant="outlined" 
                color="inherit" 
                disabled={ pagina >= Math.ceil(dados.public_repos / 30)}
                className="botao-lista-repositorios"
                onClick={() => {
                  setPagina(pagina + 1)
                  mudarPagina(usuario, setRepos, (pagina + 1), "repos")
              }}
              >
                Próximo
              </Button>
            </div>
            <div className='pagina-atual'>
              <div className='button-pagina-atual'>
                {pagina}
              </div>
            </div>
          </div>
        )
      }

      return(<></>);
}

export default Paginas;