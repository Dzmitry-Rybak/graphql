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
        authors() {
            return db.authors
        },
        review(_parent, args, _context) {
            return db.reviews.find((item) => item.id === args.id)
        },
        game(_parent, args, _content) {
            return findSingleItem(db.games, args.id)
        },
        author(_parent, { id }, _content) {
            return findSingleItem(db.authors, id)
        },
    },

    // for the "type Game -> reviews"
    Game: {
        // id: () => 'qqq', - will hardcode id as 'qqq' for Game
        reviews(parent) {
            return db.reviews.filter((item) => item.game_id === parent.id)
        },
    },

    // for the "type Author -> reviews"
    Author: {
        reviews(parent) {
            return db.reviews.filter((review) => review.id === parent.id)
        },
    },

    Review: {
        game(parent) {
            return db.games.find((item) => item.id === parent.game_id)
        },
        author(parent) {
            return db.authors.find((item) => item.id === parent.author_id)
        },
    },
}

const findSingleItem = (items, id) => {
    return items.find((item) => item.id === id)
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
