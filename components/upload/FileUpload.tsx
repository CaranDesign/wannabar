"use client"
import { useRef, useState } from "react"

import { useDataset } from "@/context/DatasetContext"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { parseCSV } from "@/lib/parsers/csv"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { OctagonX, Paperclip } from "lucide-react"

export default function FileUpload() {
  
  const { setDataset, clearDataset } = useDataset() //Retrieve CSV from global ctx via custom hooks

  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null) //use the ref to emulate file input behavior

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setFileName(file.name)
    setLoading(true)

    try {
      const dataset = await parseCSV(file)
      setDataset(dataset)
    } catch (error) {
      console.error("Errore nel parsing:", error)
    } finally {
      setLoading(false)

      //clearing input current value after saving dataset for avoiding reupload mismatch
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const removeFile = () => {
    setFileName(null);
    clearDataset();
  }

  return (
    <div className="relative flex items-center gap-3">
      {/* hidden input file to exec file uplooad */}
      <Input
        ref={fileInputRef}
        type="file"
        accept=".csv,.json,.xlsx"
        onChange={handleFile}
        disabled={loading}
        className="hidden"
      />

      {/* tooltip icno button for triggering the upload file */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="cursor-pointer"
            disabled={loading}
            onClick={() => fileInputRef.current?.click()}
          >
            {loading ? 
              <Spinner /> 
              :
              <Paperclip className="h-4 w-4" />
            }
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Carica file</p>
        </TooltipContent>
      </Tooltip>

      {/* filename */}
      <span className="text-sm text-muted-foreground truncate max-w-[220px]">
        {fileName ?
          <div className="flex gap-1">
            {fileName}
            <OctagonX className="size-3 text-red-300 cursor-pointer"  onClick={removeFile}/>
          </div>
          :
          "Nessun file selezionato"
        }
      </span>
    </div>
  )
}
