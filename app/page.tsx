"use client"

import { TypographyH1, TypographyH2, TypographyH4 } from "@/components/typography/headers"
import { UploadCard } from "@/components/upload/UploadCard"
export default function HomePage() {
  return (
    <section className="text-white w-screen h-screen flex flex-col justify-center items-center">
      
      <div className="p-2 text-center">
        <TypographyH1>Benvenuto su WannaBar! </TypographyH1>
        <TypographyH4>Una piccola e semplice interfaccia per visualizzare i tuoi dati.</TypographyH4>
  
      </div>

      <div className="mt-5">
        <UploadCard />
      </div>
      
    </section>
  )
}
