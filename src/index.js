import express from 'express'
import { success, error } from 'consola'
import { ApolloServer } from 'apollo-server-express'
import mongoose from 'mongoose'

import * as AppModels from './models'
import { DB, PORT, IN_PROD } from './config'
import { resolvers, typeDefs } from './graphql'

const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: IN_PROD,
  context: { ...AppModels }
})

server
  .start()
  .then(() => {
    server.applyMiddleware({ app })
  })
  .catch((err) => error({ message: err.message }))

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => success({
    badge: true,
    message: 'Successfully connected with Database.'
  }))
  .catch((err) => error({ message: err.message }))

app
  .listen(PORT, () => success({
    badge: true,
    message: `Started on PORT ${PORT}`
  }))