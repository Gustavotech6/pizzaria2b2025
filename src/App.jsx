import { useState } from "react"

function App(){


  const [nome, Setnome] = useState('Ronaldo')
  
  
  return(
    <div>
      <h3>Pizzaria 2B</h3>
    <input className="nome"
    placeholder="Digite seu nome..."
    onChange={(e)=>{Setnome(e.target.value)}}
    name="Nome"
      type="text" />
      <button className=" botao" onClick={()=>alert(nome)}>
      CLIQUE AQUI
      </button>
    </div>
  )
}

export default App