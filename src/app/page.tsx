import { cn } from "@/lib/utils";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function Home() {

  const users = await prisma?.user.findMany()
  const something = true;
  return (
    <>
    <div className={cn( "text-red-400")}>
      home is here
      {JSON.stringify(users)}
    </div>
    </>
  )
}
