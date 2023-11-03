"use client"

import createApolloClient from "@/apollo.client"
import { TasksList } from "@/components/index/TasksList"
import { Timer } from "@/components/index/Timer"
import { ApolloProvider } from "@apollo/client"

const client = createApolloClient()

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
          <h1>Chronacc F</h1>
        </div>
        <div className="flex flex-col gap-8 w-full max-w-5xl h-[600px]">
          <Timer />
          <TasksList />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          Follow your track
        </div>
      </main>
    </ApolloProvider>
  )
}
