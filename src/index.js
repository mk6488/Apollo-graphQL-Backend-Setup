import express from 'express'
import { success, error } from 'consola'
import { ApolloServer } from 'apollo-server-express'

import { PORT, IN_PROD } from './config'
import { resolvers, typeDefs } from './graphql'

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: IN_PROD,
  context: {}
})

server.start()
  .then((res) => {
    server.applyMiddleware({ app })
  })
  .catch((err) => error({ message: err.message }))

app.listen(PORT, () => success({
  badge: true,
  message: `Started on PORT ${PORT}`
}))