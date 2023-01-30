//import Resolver from "./Resolvers";
//import { typeDefs } from "./schema";
import { ApolloServer } from "apollo-server";
import casual from "casual";
const getUserData = () => {
    const data = {
        users: [],
    };
    // Create 100 users
    for (let i = 0; i < 2000; i++) {
        data.users.push({
            name: casual.first_name,
            surname: casual.last_name,
            address: casual.street,
            phone: casual.phone,
            email: casual.email,
            postalCode: casual.zip,
            city: casual.city,
            number: casual.building_number,
            id: casual.uuid,
        });
    }
    return data.users;
};
let people = getUserData();
const resolvers = {
    Query: {
        getAllUsers: async () => {
            return people;
        },
    },
};
const typeDefs = `#graphql
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
const server = new ApolloServer({
    cors: {
        origin: "*",
        credentials: true,
    },
    typeDefs,
    resolvers,
    introspection: true,
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=server.js.map