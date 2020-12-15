import React from "react";
import api from '../../services/api'

export const Table = ({ dados }) => {

  async function handleDelete(id) {
    await api.delete(`/usuario/${id}`).then(function (response) {
      window.location.reload();
    }).catch(function (erro) {
      console.log(erro)
    })
  }

  return (
    <table className="table table-striped">
      <caption>Lista de funcionários</caption>
      <thead className="thead-dark">
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Nome</th>
          <th scope="col">Setor</th>
          <th scope="col">Mac Address</th>
          <th scope="col">Nome da Máquina</th>
          <th scope="col">Status</th>
          <th scope="col">Histórico</th>
          <th scope="col">
            <i className="fas fa-angle-down"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        {dados && dados.length > 0 ?
          dados.map(dado => (
            <tr key={dado.idfuncionario}>
              <th scope="row">{dado.idfuncionario}</th>
              <td>{dado.nome}</td>
              <td>{dado.setor}</td>
              <td>{dado.macaddress}</td>
              <td>{dado.nomemaquina}</td>
              <td>
                <i className="fas fa-circle online"></i>Online
              </td>
              <td>
                <a href={`/historico/${dado.idfuncionario}`}>
                  <i className="fas fa-clipboard-list icons"></i>
                </a>
              </td>
              <td onClick={() => handleDelete(dado.idfuncionario)}>
                  <i className="fas fa-trash icons"></i>
              </td>
            </tr>
          )) : <tr>
                  <td>Você não possui usuários cadastrados.</td>
              </tr>}
      </tbody>
    </table>
  );
};
