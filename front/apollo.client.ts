import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client"

// todo
const cleanTypeName = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    const omitTypename = (key, value) =>
      key === "__typename" ? undefined : value
    operation.variables = JSON.parse(
      JSON.stringify(operation.variables),
      omitTypename,
    )
  }
  return forward(operation).map((data) => {
    return data
  })
})

const createApolloClient = () => {
  return new ApolloClient({
    uri: "/api/v1",
    // link: ApolloLink.from([cleanTypeName]),
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
