import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button  } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  const something = true;
  return (
    <>
    <div className={cn( "text-red-400")}>
      home is here
      <Button>
        click me
      </Button>
      
    </div>
    </>
  )
}
