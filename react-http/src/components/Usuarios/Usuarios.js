import React, { useState, useEffect } from 'react'

import Usuario from '../Usuario/Usuario'

function Usuarios() {

  const[usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/usuarios/findAll')
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])//Essa dependência "[]" é muito importante para não gerar lopping
        //Desta forma temos o mesmo efeito do ComponentDidMount

  const removerUsuario = usuario => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {

      fetch(`http://localhost:8080/usuarios/deletar/${usuario.id}`, {
        method: 'DELETE'
      })
        .then(resposta => {
          if (resposta.ok) {
            setUsuarios(usuarios.filter(x => x.id !== usuario.id))
          }
        })
    }
  }

    return (
      <>
        {usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={() => removerUsuario(usuario)}
          />
        ))}
      </>
    )
  }


export default Usuarios