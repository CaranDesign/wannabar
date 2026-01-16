import { DatasetColumn } from "./dataset"

export type ChartType = 
 | "bar"
 | "pie"
 | "line"
 | "area"
 

export type ChartConfig = {
  chartType: ChartType | null
  selectedColumns: DatasetColumn[] // selected column for chart type
}

// normalization of CSV data before converting it for charts
export type NormalizedSeries = {
  label: string,
  values: number[]
}

export type NormalizedChartData = {
  labels: (string | number)[]
  series: NormalizedSeries[]
}