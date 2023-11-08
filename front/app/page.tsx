"use client"

import createApolloClient from "@/apollo.client"
import { TasksList } from "@/components/index/TasksList"
import { Timer } from "@/components/index/Timer"
import { ApolloProvider } from "@apollo/client"
import { RecoilRoot } from "recoil"
import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"
import { LoadingFallback } from "@/components/common/LoadingFallback"

const client = createApolloClient()

export default function Home() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ApolloProvider client={client}>
        <RecoilRoot>
          <Suspense fallback={<LoadingFallback />}>
            <main className="flex min-h-screen flex-col items-center justify-start p-8">
              <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
                <h1>Chronacc F</h1>
              </div>
              <div className="flex flex-col gap-8 w-full max-w-5xl min-h-[600px]">
                <Timer />
                <TasksList />
              </div>

              <div className="my-6 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                Log your effort
              </div>
            </main>
          </Suspense>
        </RecoilRoot>
      </ApolloProvider>
    </ErrorBoundary>
  )
}
