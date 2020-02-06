import React from 'react';

class App extends React.Component {
    
  state = {
    nome : ''
  }
  
  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = [ "Fulano", "Ciclano"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (
        <select>
          {comboBoxOpcoes}
        </select>
    )
  }

  componentDidMount(){
    console.log('Executou o componentDidMount')
  }

  render(){
      console.log('Executou o render')

      const MeuComboBox = () => this.criaComboBox()

      return (
      <>
        <input className="text-center" type="text" value={this.state.nome} onChange={this.modificarNome}/>
        <h1>Hello {this.state.nome} </h1>
        <MeuComboBox />
      </>
      )
    }
}

export default App;