import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from '@apollo/react-hooks'
import WithApollo from '../lib/with-apollo'
import Name from '../components/Name'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    headers: {
    },
  }),
  cache: new InMemoryCache(),
});

const Page = () => (
  <ApolloProvider client={client}>
   <Name />

  </ApolloProvider>
)

export default WithApollo(Page)
