'use client'

import { useConfig } from '@/context/ConfigContext';
import { useDataset } from '@/context/DatasetContext'
import { TypographyH4, TypographyP } from '../typography/headers';
import { useRouter } from 'next/navigation';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { toast } from 'sonner';
import { DatasetColumn } from '@/types/dataset';


export default function DataSelector() {
   
  
  const { dataset } = useDataset();
  const { config, setSelectedColumns } = useConfig();
  const router = useRouter();
  
  const selectedColumns = config.selectedColumns;
  if (!dataset) router.push("/");

  //toggling the column by selecting it in data preview using context functions
  const handleClick = (column: DatasetColumn) => {

    // deselect if column is already selected
    if (selectedColumns.some(c => c.name === column.name)) {
      setSelectedColumns(
        selectedColumns.filter(c => c.name !== column.name)
      );
      return;
    }

     // second column must be a number
    if (selectedColumns.length === 1 && column.type !== 'number') {
      toast.error('La seconda colonna deve essere numerica');
      return;
    }
    
    // max 2 column selected rules
    if (selectedColumns.length >= 2) {
      toast.warning('Non puoi scegliere oltre 2 colonne');
      return;
    }

    // add column as default
    setSelectedColumns([...selectedColumns, column]);
  };


  const hilightCol = (column: string) => {
    return selectedColumns.some(c => c.name === column) ? "bg-yellow-600" : ""
  }

  return (
   <>
      {dataset && 
        <div className='flex items-center justify-center flex-col'>
          <TypographyP>Ecco una anteprima dei tuoi dati, scegli i dati da visualizzare.</TypographyP>
          <div className='wb-data-selector border border-yellow-600/50 w-90 sm:w-lg md:w-3xl fade-in-up wb-bg-glass rounded-lg mt-5'>
              <Table>
                <TableHeader>
                    <TableRow>
                      {dataset?.columns.map((column, index) => 
                        <TableHead
                          onClick={()=>handleClick(column)}
                          className={`cursor-pointer ${hilightCol(column.name)}` }
                          key={index}
                        >
                          {column.name}
                        </TableHead>
                        )
                      }
                  </TableRow>
                </TableHeader>
                <TableBody className='bg-black'>
                  {dataset.rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {dataset.columns.map(column => (
                        <TableCell key={column.name}
                          className={`cursor-pointer ${hilightCol(column.name)}`}
                        >
                          {String(row[column.name])}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </div>
        </div>
      }
   </>
  )
}
