import { ApolloClient, createHttpLink, InMemoryCache, from } from '@apollo/client/core'
import { onError } from '@apollo/client/link/error'

// 与 API 的 HTTP 连接
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

// 缓存实现
const cache = new InMemoryCache()

// 错误处理
const errorLink = onError(({ graphQLErrors, networkError }) => {
  graphQLErrors?.forEach(({ message, locations, path }) => {
    console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
  })
  if (networkError) console.warn(`[Network error]: ${networkError}`)
})

// 创建 apollo 客户端
export const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache
})

export const { query, mutate } = apolloClient
