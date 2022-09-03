import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const RadarChart = ({ valuesRadar }) => {
  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
  };
  const data = {
    labels: [
      "PLANIFICACIÓN",
      "EQUIPO",
      "PROCESOS",
      "INFORMACIÓN",
      "FINANCIAMIENTO",
      "FAMILIA",
    ],
    datasets: [
      {
        label: "Diagnóstico",
        data: valuesRadar,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        tension: 0.2,
      },
    ],
  };
  return <Radar data={data} options={options} />;
};

export default RadarChart;
