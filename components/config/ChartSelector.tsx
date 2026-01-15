"use client"

import { useEffect, useState } from "react"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { ChartArea, ChartColumnBig, ChartLine, ChartPie, ChartScatter } from "lucide-react"
import { ChartType } from "@/types/chart"
import { useConfig } from "@/context/ConfigContext"
import DataSelector from "./DataSelector"

type Option = {
   label: string
   value: ChartType
   icon: React.ReactNode
}

//defining seleciton of different charts with name value and icon
const options: Option[] = [
  { label: "Barre", value: "bar",    icon:<ChartColumnBig/>  },
  { label: "Torta", value: "pie",      icon:<ChartPie />       },
  { label: "Barre", value: "line",     icon:<ChartLine/>       },
  { label: "Area",  value: "area",     icon:<ChartArea />      },
]

export function ChartSelector() {
   const { config, setChartType } = useConfig()
   
   return (
     
      <>
         {/* group of buttons for choosing the type of the chart */}
         <ToggleGroup
            type="single"
            value={config.chartType ?? undefined}
            onValueChange={(type) => {
            if (type) setChartType(type as ChartType)
            }}
            className="gap-2 flex flex-wrap justify-center items-center mb-5"
            spacing={2}
         >
            {options.map((opt) => (
            <ToggleGroupItem
               key={opt.value}
               value={opt.value}
               className="
                  cursor-pointer
                  px-4
                  data-[state=on]:bg-primary
                  data-[state=on]:text-primary-foreground
               "
               >
                  {opt.icon}
                  {opt.label}
            </ToggleGroupItem>
            ))}
         </ToggleGroup>
      </>
     
  )
}
