const { gql } = require('apollo-server');

// ID, String, Boolean, Int or Float

// check custom scalar https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/

// rocket: Rocket

const typeDefs = gql`
  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type Launch {
    id: ID!
    site: String
    site2: String
    site3: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }
  type User {
    id: ID!
    email: String!
    trips: [Launch]!
    token: String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }

  type LaunchConnection {
    cursor: String!
    hasMore: Boolean!
    launches: [Launch]!
  }

  type Hello {
    message: String!
  }

  type Message {
    id: String!
    text: String!
  }

  type Query {
    #launches: [Launch]!
    launches(pageSize: Int after: String): LaunchConnection!
    launch(id: ID!): Launch
    me: User
    hello(name: String): Hello
    messages: [Message]!
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): User
    addMessage(input: String!): Message
  }
`;

module.exports = typeDefs;