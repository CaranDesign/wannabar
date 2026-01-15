"use client"

import { ChartConfig, ChartType } from "@/types/chart"
import {DatasetColumn} from "@/types/dataset"
import React, { createContext, useContext, useState, ReactNode } from "react"


type ConfigContextType = {
  config: ChartConfig
  setChartType: (type: ChartType) => void
  setSelectedColumns: (columns: DatasetColumn[]) => void
  resetConfig: () => void
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined)

export const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<ChartConfig>({
    chartType: null,
    selectedColumns: [],
  })

   const setChartType = (type: ChartType) => {
      setConfig(prev => ({
         ...prev,
         chartType: type,
         selectedColumns: [], // reset colonne
      }))
   }


  const setSelectedColumns = (columns: DatasetColumn[]) => {
    setConfig((prev) => ({
      ...prev,
      selectedColumns: columns,
    }))
  }

  const resetConfig = () => {
    setConfig({
      chartType: null,
      selectedColumns: [],
    })
  }

  return (
    <ConfigContext.Provider
        value={{
           config,
           setChartType,
           setSelectedColumns,
           resetConfig
        }}
    >
      {children}
    </ConfigContext.Provider>
  )
}

export const useConfig = () => {
  const context = useContext(ConfigContext)
  if (!context) throw new Error("useConfig must be used within a ConfigProvider")
  return context
}
