import React, { useEffect, useState } from "react";
import { HorizontalBar } from "react-chartjs-2";
import api from "../../../services/api";

const Chart1 = ({idgestor}) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let nome1 = [];
    let quantidade1 = [];
    api
      .get(`/dash/sites/${idgestor}`)
      .then((res) => {
        for (const dataObj of res.data.recordset) {
          quantidade1.push(parseInt(dataObj.quantidade));
          nome1.push(dataObj.titulo);
        }
        setChartData({
          labels: nome1,
          datasets: [
            {
              label: "Sites",
              data: quantidade1,
              backgroundColor: [
                "#7BAAC4b1",
                "#FF3D22b1",
                "#7BAAC4b1",
                "#FF3D22b1",
                "#7BAAC4b1",
                "#FF3D22b1",
              ],
              borderColor: [
                "#7BAAC4",
                "#FF3D22",
                "#7BAAC4",
                "#FF3D22",
                "#7BAAC4",
                "#FF3D22",
              ],
              borderWidth: 3,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //useEffect(() => {
  //  chart();
  //}, [chart]);

  React.useCallback(() => {
    chart();
  }, [chart])

  return (
    <div>
      <div>
        <h5>Sites mais acessados</h5>
        <HorizontalBar data={chartData} />
      </div>
    </div>
  );
};

export default Chart1;
