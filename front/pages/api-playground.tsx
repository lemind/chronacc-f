"use client"
/* eslint-disable no-console */

import { gql } from "@/__generated__"
import createApolloClient from "@/apollo.client"
import { ApolloProvider, useLazyQuery } from "@apollo/client"
import { FC } from "react"

const REQUEST_USER = gql(`
  query Users($id: String!) {
    user(id: $id) {
      id
      firstName
      lastName
      creationDate
    }
  }
`)

const UserFetch: FC = () => {
  const [fetchUser, { data }] = useLazyQuery(REQUEST_USER, {
    variables: { id: "1" },
  })
  const testHandle = async () => {
    fetchUser()
    console.log("FE - user", data)
  }

  return (
    <>
      <button onClick={testHandle}>Fetch user</button>
      <br />
      {data && <div>User: {JSON.stringify(data)}</div>}
    </>
  )
}

const client = createApolloClient()

export default function ApiPlayground() {
  return (
    <>
      <ApolloProvider client={client}>
        <UserFetch />
      </ApolloProvider>
    </>
  )
}
