import { gql } from "apollo-server-express"

export default gql `
  extend type Query {
    getJuniors: [Junior]!
  },

  extend type Mutation {
    createJunior(newJunior: NewJunior): Junior!
  }

  input NewJunior {
    gender: String!
    firstName: String!
    lastName: String!
    address1: String!
    address2: String!
    town: String!
    postcode: String!
    school: String!
    dob: String!
  }

  type Junior {
    gender: String!
    firstName: String!
    lastName: String!
    address1: String!
    address2: String!
    town: String!
    postcode: String!
    school: String!
    dob: String!
    createdAt: String
    updatedAt: String
  }
`