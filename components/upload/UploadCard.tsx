import { useRouter } from "next/navigation"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import FileUpload from "./FileUpload"

import { CircleArrowRight } from "lucide-react"
import { Button } from "../ui/button"
import { useDataset } from "@/context/DatasetContext"
import { toast } from "sonner"

export function UploadCard() {
  const { dataset } = useDataset();

  const router = useRouter();

  //checking dataset and trigger loader

  const onClick = () => {
    toast.promise<{ name: string }>(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ name: "Event" }), 500)
          ),
        {
          loading: "Ti stiamo reindirizzando alla pagina di configurazione...",
          success:() => {
            router.push(`/config`)
            return "Dati caricati con successo!"
          },
          error: "Error",
        }
      )
  }

  return (
    <Card className="w-full min-w-xs wb-bg-glass">
      <CardContent>
         <FileUpload/>
      </CardContent>
      {dataset &&
        <CardFooter>
          <Button
            className="w-full fade-in-up cursor-pointer"
            variant="outline"
            size="sm"
            onClick={onClick}
          >
            <CircleArrowRight /> Avanti
          </Button>
        </CardFooter>
      }
    </Card>
  )
}
