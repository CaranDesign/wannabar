"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import type { Dataset, DatasetValue } from "@/types/dataset"

type DatasetContextType = {
  dataset: Dataset | null
  setDataset: (d: Dataset) => void
  clearDataset: () => void
  updateCell: (rowIndex: number, columnName: string, value: DatasetValue) => void
}

const DatasetContext = createContext<DatasetContextType | undefined>(undefined)

type Props = {
  children: ReactNode
}

export function DatasetProvider({ children }: Props) {
  const [dataset, setDatasetState] = useState<Dataset | null>(null)

  const setDataset = (d: Dataset) => setDatasetState(d)

  const clearDataset = () => setDatasetState(null)

  const updateCell = (rowIndex: number, columnName: string, value: DatasetValue) => {
    if (!dataset) return
    const newRows = [...dataset.rows]
    newRows[rowIndex] = { ...newRows[rowIndex], [columnName]: value }
    setDatasetState({ ...dataset, rows: newRows })
  }

  console.log(dataset)

  return (
    <DatasetContext.Provider 
      value={{
        dataset,
        clearDataset,
        setDataset,
        updateCell
      }}
    >
      {children}
    </DatasetContext.Provider>
  )
}

export const useDataset = () => {
  const context = useContext(DatasetContext)
  if (!context) throw new Error("useDataset must be used within a DatasetProvider")
  return context
}