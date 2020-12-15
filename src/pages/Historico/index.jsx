import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Form/Button/style";
import Select from "../../components/Form/Select/Select";
import TableHist from "../../components/TableHist/TableHist";
import { Header } from "../../components/Header/Header";
import * as S from "./style";
import Head from "../../components/Helper/Head";
import { CSVLink } from "react-csv";
import api from "../../services/api";
import { format } from "date-fns";

const Historico = () => {
  const { id } = useParams();
  const [dados, setDados] = React.useState(null);
  const [dataa, setDataa] = React.useState([["Título", "URL", "Data e Hora"]]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/dash/historico/${id}`);
      setDados(await response.data.recordset);
      if (dados && dataa.length < dados.length) {
        dados.map(dado => (
        dataa.push([dado.titulo, dado.urls, dado.datahora])
      ));
        console.log(setDataa);
      }
    }
    fetchData();
  }, [id, dados, dataa]);


  return (
    <S.Section>
      <Head title="Histórico" />
      <Header titulo="Histórico" />
      <S.Config>
        <CSVLink
          enclosingCharacter={`'`}
          data={dataa}
          filename={`historico-${dados && dados[0].nome}(${format(new Date(), "dd'-'MM'-'yy")}).csv`}
        >
          <Button>
            Gerar arquivo CSV <i className="fas fa-file-csv"></i>
          </Button>
        </CSVLink>
        <Select opcoes={["Últimas 24 horas", "Últimos 7 dias", "Último mês"]} />
      </S.Config>
      <h3>Histórico do Browser: {dados && dados[0].nome}</h3>
      <div className="table-responsive">
        <TableHist dados={dados} />
      </div>
    </S.Section>
  );
};

export default Historico;
