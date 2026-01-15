import { Dataset, DatasetColumn } from "@/types/dataset";
import { NormalizedChartData } from "@/types/chart";
import { randomColor } from "../utils";

export function normalizeDataset(
   dataset: Dataset,
   selectedColumns: DatasetColumn[]
): NormalizedChartData {
  if (selectedColumns.length === 0) {
    throw new Error("Nessuna colonna selezionata");
  }

  // La prima colonna selezionata è l'asse X
  const xColumn = selectedColumns[0].name;

  // Le altre sono serie numeriche
  const yColumns = selectedColumns.slice(1);

  return {
    labels: dataset.rows.map(row => row[xColumn]),
    series: yColumns.map(col => ({
      label: col.name,
      values: dataset.rows.map(row => Number(row[col.name])),
    })),
  };
}


export function buildChartData(type: string, normalized: NormalizedChartData) {
  const values = normalized.series[0].values;
  const baseColor = randomColor();

  switch (type) {
    case "bar":
    case "line":
    case "area":
      return {
        labels: normalized.labels,
        datasets: [
          {
            label: normalized.series[0].label,
            data: values,
            backgroundColor: baseColor,
            borderColor: baseColor,
            fill: type === "area",
            tension: 0.3,
          },
        ],
      };

    case "pie":
    case "doughnut":
    case "polarArea":
      return {
        labels: normalized.labels,
        datasets: [
          {
            data: values,
            backgroundColor: values.map(() => randomColor()),
          },
        ],
      };

    case "radar":
      return {
        labels: normalized.labels,
        datasets: [
          {
            label: normalized.series[0].label,
            data: values,
            backgroundColor: randomColor(0.4),
            borderColor: randomColor(1),
          },
        ],
      };

    default:
      return { labels: [], datasets: [] };
  }
}
