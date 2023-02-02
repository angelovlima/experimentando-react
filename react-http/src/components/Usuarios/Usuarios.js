import React, { Component } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

class Usuarios extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuarios: [
      ]
    }

    this.adicionarUsuario = this.adicionarUsuario.bind(this)
  }

  adicionarUsuario(usuario) {
    const usuarios = [...this.state.usuarios, usuario]
    this.setState({ usuarios: usuarios })
  }

  removerUsuario(usuario) {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {

      fetch(`http://localhost:8080/usuarios/deletar/${usuario.id}`,{
        method: 'DELETE'
      })
        .then(resposta => {
          if(resposta.ok) {
            let usuarios = this.state.usuarios
            usuarios = usuarios.filter(x => x.id !== usuario.id)
            //this.setState({ usuarios: usuarios })
            //Mesmo efeito acima, modo diferente
            this.setState({ usuarios })
          }
        })
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/usuarios/findAll')
      .then(resposta => resposta.json())
      .then(dados => this.setState({usuarios: dados}))
  }

  render() {
    return (
      <>
        <AdicionarUsuario adicionarUsuario={this.adicionarUsuario} />

        {this.state.usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={this.removerUsuario.bind(this, usuario)}
          />
        ))}
      </>
    )
  }
}

export default Usuarios