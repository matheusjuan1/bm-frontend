import React from "react";
import  { Table }  from  'react-bootstrap' ;
import { parseISO, format, } from 'date-fns';
import pt from 'date-fns/locale/pt';


const TableHist = ({ dados }) => {

  return (
    <Table className="table table-striped tableHist">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Titúlo</th>
          <th scope="col">Url</th>
          <th scope="col">Data e Hora</th>
        </tr>
      </thead>
      <tbody>
        {dados && dados.length > 0 ?
          dados.map((dado) => (
            <tr key={dado.idhistorico}>
              <td width="20">{dado.titulo}</td>
              <td width="70"><a href={dado.urls}>{dado.urls}</a></td>
              <td width="10">{format(parseISO(dado.datahora), "dd'/'MM'/'yy'-'HH:mm'h'", {locale: pt})}</td>
            </tr>
          )) : <tr>
          <td>Não possui histórico</td>
          </tr>}
      </tbody>
    </Table>
  );
};

export default TableHist;
