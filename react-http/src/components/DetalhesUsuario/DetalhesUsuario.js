import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetalhesUsuario() {

    const { id } = useParams()

    const [usuario, setUsuario] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/usuarios/findById/${id}`)
            .then(resposta => resposta.json())
            .then(dados => {
                setUsuario({
                    id: dados.id,
                    nome: dados.nome,
                    sobrenome: dados.sobrenome,
                    email: dados.email
                })
            })
    }, [id])

    if(usuario.nome !== undefined) {
        return(
            <>
                <h1>{usuario.nome} {usuario.sobrenome}</h1>
                <p>{usuario.email}</p>
                <Link to="/usuarios">Voltar</Link>
            </>
        )
    }
    return (
        <>
            <h1>Usuário não encontrado!</h1>
            <Link to="/usuarios">Voltar</Link>
        </>
    )
}

export default DetalhesUsuario;