const schema = `



"""
A hello world Query
"""
type Query {
     hello: String!
     users: [User]!
}

type Mutation {
     createUser(email: String!, name: String!): User!
}

type User {
     id: ID!
     email: String
     name: String!
}


`;

export { schema };
