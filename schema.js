export const typeDefs = `#graphql
    type Game {
        id: ID!, # not allow to be null
        title: String!,
        platform: [String!]!
    }

    type Review {
        id: ID!
        rating: Int!
        content: String
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }

    # type Query - every graphql schema needs to have
    type Query {
        reviews: [Review]
        games: [Game]
        author: [Author]
    }
`

// int, float, string, boolean, ID
