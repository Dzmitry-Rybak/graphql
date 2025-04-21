export const typeDefs = `#graphql
    type Game {
        id: ID!, # not allow to be null
        title: String!,
        platform: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String
        game: Game!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    # type Query - every graphql schema needs to have
    type Query {
        reviews: [Review]
        # Query variable: id: ID!
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }

    # defined how users can mutate (add, delete, update) data.
    type Mutation {
        deleteGame(id: ID!): [Game]
        addGame(game: AddGameInput!): Game
        updateGame(id: ID!, edits: EditGameInput!): Game
    }

    # for the multiply arguments
    input AddGameInput {
        title: String!,
        platform: [String!]!
    }
    
    input EditGameInput {
        title: String,
        platform: [String!]
    }
`
