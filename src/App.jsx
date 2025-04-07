import { useState } from "react"

function App(){
  
  const Formulario =(props) => {


    const [nome, Setnome] = useState('Ronaldo')

    return(
      <div>
        <h3>{props.titulo}</h3>
        <input className="nome"
    placeholder="Digite seu nome..."
    onChange={(e)=>{Setnome(e.target.value)}}
    name="Nome"
      type="text" />
      <button className="botao" onClick={
        () => {
       if(nome.length > 0)
          alert(nome)
       else
          alert(props.mensagem)
      }
    }>
      CLIQUE AQUI
      </button>
      </div>
    )
  }


  return(
    <div>
      <h3> Pizzaria 2B</h3>
      <Formulario titulo = "Nome" mensagem = " corinthians" />  
      <Formulario titulo = "E-mail" mensagem = " trikas" />
      <Formulario titulo ="CPF" mensagem = "parmera" />
      <Formulario />
      <Formulario />
      <Formulario />
    </div>
  )
}

export default App