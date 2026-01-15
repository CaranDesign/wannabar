// lib/parsers/csv.ts
import Papa from "papaparse"

import type { Dataset, DatasetRow, DatasetValue } from "@/types/dataset"


// convert string value into cell to a parsed value accordingly to valid DatasetValue
function inferValue(value: string): DatasetValue {
  if (value === "") return null
  if (!isNaN(Number(value))) return Number(value)
  if (!isNaN(Date.parse(value))) return new Date(value)
  return value
}

// create metadata of column infering the type from rows values
function inferColumns(rows: DatasetRow[]) {
   if (rows.length === 0) return []
   
   // map all the keys from ROW 0 (name of the columns) 
   // find the first not nullable value of the rows based on key 
   // infer the type of the column based on that value
  return Object.keys(rows[0]).map((key) => {
    const firstNonNull = rows.find((r) => r[key] != null)?.[key]
    let type: "number" | "string" | "date" = "string"
    if (typeof firstNonNull === "number") type = "number"
    else if (firstNonNull instanceof Date) type = "date"
    return { name: key, type }
  })
}


//parse function for parse file CSV into JSON accordingly to the types in /types/dataset.ts
export function parseCSV(file: File): Promise<Dataset> {
  return new Promise((resolve, reject) => {
    Papa.parse<Record<string, string>>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const rows: DatasetRow[] = results.data.map((row) => {
            const newRow: DatasetRow = {}
            Object.entries(row).forEach(([key, value]) => {
              newRow[key] = inferValue(value)
            })
            return newRow
          })

          const columns = inferColumns(rows)
          resolve({ columns, rows })
        } catch (err) {
          reject(err)
        }
      },
      error: (err) => reject(err),
    })
  })
}

