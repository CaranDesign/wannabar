'use client'
import { useConfig } from "@/context/ConfigContext"
import { useRouter, useSearchParams } from "next/navigation"

import { TypographyH2, TypographyH4 } from "@/components/typography/headers"
import { ChartSelector } from "@/components/config/ChartSelector"
import WbSecondaryButton from "@/components/WbSecondaryButton"
import DataSelector from "@/components/config/DataSelector"
import WbPrimaryButton from "@/components/WbPrimaryButton"


export default function ConfigPage() {
   
   const { config } = useConfig();
   const router = useRouter();
   
   const disabled = 
         (config.selectedColumns.length === 2) ? false :
            true ;



  return (
     <section className="w-screen flex flex-col justify-center items-center text-center py-25">
        
        <TypographyH2>Seleziona i tuoi dati</TypographyH2>
        <TypographyH4>Ora che abbiamo caricato i dati, scegli i campi da visualizzare.</TypographyH4>

         <div className="mb-10">
           <DataSelector />
        </div>

         <div className="flex gap-2">
            <div className='mt-5 fade-in-up'>
              <WbSecondaryButton
                  onClick={()=> router.push("/")}
               >
                  Cambia file
               </WbSecondaryButton>
           </div>
           
   
            <div className='mt-5 fade-in-up'>
               <WbPrimaryButton
                  disabled={disabled}
                  onClick={()=> router.push("/viewer")}
               >
                  Visualizza Dati
               </WbPrimaryButton>
           </div>
         </div>
        
    </section>
  )
}
