const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const logger = require('morgan')
const { GraphQLServer } = require('graphql-yoga')
const path = require('path')

const Database = require('./Database')
const resolvers = require('./App/Resolvers')

Database.connection()

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'App', 'Schemas', 'index.graphql'),
  resolvers
})

server.use(logger('dev'))
server.use(cors())

server.start()
