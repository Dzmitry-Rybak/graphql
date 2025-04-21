import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import db from './db.js'
// types
import { typeDefs } from './schema.js'

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        reviews() {
            return db.reviews
        },
        author() {
            return db.authors
        },
    },
}

// server setup
const server = new ApolloServer({
    // 1. typeDefs - description of data types & relationship they have
    typeDefs,
    // 2. resolver - how we handle/response request/queries
    resolvers,
})

const asd = await startStandaloneServer(server, {
    listen: { port: 4000 },
})

console.log(`Server listen al ${4000}`)
