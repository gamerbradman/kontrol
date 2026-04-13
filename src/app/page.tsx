import { cn } from "@/lib/utils";
import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";



export default async function Home() {
  const queryClient = getQueryClient() ;

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions())
  
  return (
    <>
    <div className={cn( "text-red-400 font-extrabold")}>
      <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>loading...</p>}>
      <Client/>
       </Suspense>
      </HydrationBoundary>
    </div>
    </>
  )
}
