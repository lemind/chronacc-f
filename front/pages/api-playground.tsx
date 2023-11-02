"use client"

import createApolloClient from "@/apollo.client"
import { ApolloProvider, gql, useLazyQuery } from "@apollo/client"

const client = createApolloClient()

const REQUEST_USER = gql`
  query Users {
    user(id: "1") {
      id
      firstName
      lastName
      creationDate
    }
  }
`

function UserFetch() {
  const [fetchUser, { data }] = useLazyQuery(REQUEST_USER)
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

export default function ApiPlayground() {
  return (
    <>
      <ApolloProvider client={client}>
        <UserFetch />
      </ApolloProvider>
    </>
  )
}
