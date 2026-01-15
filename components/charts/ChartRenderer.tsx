'use client'

import {
  Bar,
  Line,
  Pie,
  Doughnut,
  Radar,
  PolarArea,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useDataset } from "@/context/DatasetContext";
import { useConfig } from "@/context/ConfigContext";
import { buildChartData, normalizeDataset } from "@/lib/chart/normalize";

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function ChartRenderer({ type }: { type: string }) {
  const { dataset } = useDataset();
  const { config } = useConfig();

  //theme palette for charts
  const darkOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#e5e7eb",
        },
      },
      tooltip: {
        backgroundColor: "#111827",
        titleColor: "#f9fafb",
        bodyColor: "#e5e7eb",
        borderColor: "#374151",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: { color: "#e5e7eb" },
        grid: { color: "#374151" },
      },
      y: {
        ticks: { color: "#e5e7eb" },
        grid: { color: "#374151" },
      },
    },
  };

  
  if (!dataset || config.selectedColumns.length < 2) return null;

  const normalized = normalizeDataset(dataset, config.selectedColumns);
  const data = buildChartData(type, normalized);

  switch (type) {
    case "bar":
      return <Bar data={data} options={darkOptions} />;
    case "line":
    case "area":
      return <Line data={data} options={darkOptions} />;
    case "pie":
      return <Pie data={data} options={darkOptions} />;
    case "doughnut":
      return <Doughnut data={data} options={darkOptions} />;
    case "radar":
      return <Radar data={data} options={darkOptions} />;
    case "polarArea":
      return <PolarArea data={data} options={darkOptions} />;
    default:
      return null;
  }
}
