import { resolvers } from "./resolvers.js";
import { typeDefs } from "./schema.js";
import { ApolloServer } from "apollo-server";
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