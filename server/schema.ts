export const typeDefs = `#graphql
type User {
  name: String,
  surname:String,
  address:String,
  email:String,
  phone:String
}
type Query {
  getAllUsers: [User]
}
`;
