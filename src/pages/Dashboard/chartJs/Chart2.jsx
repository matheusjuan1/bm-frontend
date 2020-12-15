import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const ChartJs = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let nomes = ["Atividade", "Inatividade"];
    let dados = [170, 10];
    setChartData({
      labels: nomes,
      datasets: [
        {
          label: nomes,
          data: dados,
          backgroundColor: ["#7BAAC4b1", "#FF3D22b1"],
          borderColor: ["#7BAAC4", "#FF3D22"],
          borderWidth: 3,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      <h5>Atividade e Inativade dos funcionários</h5>
      <div>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default ChartJs;
