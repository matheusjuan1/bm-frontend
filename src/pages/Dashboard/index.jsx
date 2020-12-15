import React from "react";
import { Header } from "../../components/Header/Header";
import { Table } from "../../components/Table/Table";
import api from "../../services/api";
import { UserContext } from "../../UserContext";

import Chart2 from "./chartJs/Chart2";
import Chart1 from "./chartJs3/Chart1";
import Head from "../../components/Helper/Head";

import * as S from "./style";

const Dashboard = () => {
  const [data, setData] = React.useState(null);
  const { dados } = React.useContext(UserContext);
  const [func, setFunc] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      if (dados) {
        const response = await api.get(`/dash/funcionarios/${dados.idgestor}`);
        setData(await response.data.recordset);
        setFunc(response.data.recordset.length);
      }
    }
    fetchData();
  }, [dados]);

  return (
    <section>
      <Head title="Painel de Controle" />
      <Header titulo="Painel de Controle" />
      <S.ContainerGraficos className="animeTop">
        <S.GridTop>
          <S.Container2>
            <Chart2 />
          </S.Container2>
          <S.Container2>
            <h2>Status</h2>
            <div className="funcionarios">
              <div
                className="funcionarioStatus"
                style={{ backgroundColor: "#adffb4aa" }}
              >
                <h5>
                  Online <i className="fas fa-circle online"></i>
                </h5>
                <p>{func}</p>
                <h5>Funcionários</h5>
              </div>
              <div
                className="funcionarioStatus"
                style={{ backgroundColor: "#ffadadAA" }}
              >
                <h5>
                  Offline <i className="fas fa-circle offline"></i>
                </h5>
                <p>0</p>
                <h5>Funcionários</h5>
              </div>
            </div>
            <h3>Total de funcionários: {func}</h3>
          </S.Container2>
        </S.GridTop>
        <S.Container className="table-responsive">
          <Table dados={data} />
        </S.Container>
        <S.Container id="grafico3">
          <Chart1 idgestor={dados && dados.idgestor} />
        </S.Container>
      </S.ContainerGraficos>
    </section>
  );
};

export default Dashboard;
