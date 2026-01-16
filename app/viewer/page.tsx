'use client'
import { useRouter } from 'next/navigation'

import ChartRenderer from '@/components/charts/ChartRenderer'
import WbPrimaryButton from '@/components/WbPrimaryButton'
import WbCard from '@/components/WbCard'
import { useDataset } from '@/context/DatasetContext'

export default function ViewerPage() {
  const { dataset } = useDataset();
  const router = useRouter();

  const csColumns = "col-span-2 md:col-span-1";
  const csChart = "p-6 h-50 md:h-150 flex items-center justify-center";

  if (!dataset) router.push("/");
  
  return (
    <section className="text-white w-screen min-h-screen flex flex-col items-center p-5 py-30">
      

     <div className="max-w-7xl w-full flex justify-end items-end">
        <div className="mb-10 fade-in-up">
          <WbPrimaryButton onClick={() => router.push('/config')}>
            Cambia Dati
          </WbPrimaryButton>
        </div>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl w-full">
        
        {/* Line */}
       <div className={`${csColumns}`}> 
          <WbCard>
            <div className={`${csChart}`}>
              <ChartRenderer type="line" />
            </div>
          </WbCard>
       </div>

        {/* Bar */}
       <div className={`${csColumns}`}> 
          <WbCard>
            <div className={`${csChart}`}>
              <ChartRenderer type="bar" />
            </div>
          </WbCard>
       </div>

        {/* Area */}
       <div className={`${csColumns}`}> 
          <WbCard>
            <div className={`${csChart}`}>
              <ChartRenderer type="area" />
            </div>
          </WbCard>
       </div>

        {/* Pie */}
       <div className={`${csColumns}`}> 
          <WbCard>
            <div className={`${csChart}`}>
              <ChartRenderer type="pie" />
            </div>
          </WbCard>
        </div>

        {/* Doughnut */}
       <div className={`${csColumns}`}> 
          <WbCard>
            <div className={`${csChart}`}>
              <ChartRenderer type="doughnut" />
            </div>
          </WbCard>
        </div>

        {/* Radar */}
       <div className={`${csColumns}`}> 
          <WbCard>
            <div className={`${csChart}`}>
              <ChartRenderer type="radar" />
            </div>
          </WbCard>
       </div>

        {/* Polar Area */}
       <div className={`${csColumns}`}> 
          <WbCard>
            <div className={`${csChart}`}>
              <ChartRenderer type="polarArea" />
            </div>
          </WbCard>
       </div>

      </div>
    </section>
  )
}
