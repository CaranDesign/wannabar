// defining the field types normalized from uploadet file. 
// currently we accept and use only number, string and date (YYYY-MM-DD)

export type FieldType = "number" | "string"

export type DatasetColumn = {
  name: string
  type: FieldType
}

export type DatasetValue = string | number | null

export type DatasetRow = Record<string, DatasetValue>

export type Dataset = {
  columns: DatasetColumn[]
  rows: DatasetRow[]
}
