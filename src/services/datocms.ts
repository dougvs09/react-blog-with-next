import { GraphQLClient } from 'graphql-request'

type RequestTypes = {
  query: string
  variables?: object
}

export function request({ query, variables = {} }: RequestTypes) {
  const endpoint = 'https://graphql.datocms.com/'
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}
