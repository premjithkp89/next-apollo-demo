import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from '@apollo/react-hooks'
import WithApollo from '../lib/with-apollo'
import Name from '../components/Name'
import fetch from 'cross-fetch';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch
  }),
  cache: new InMemoryCache(),
});

const App = () => (

  <ApolloProvider client={client}>

   <Name />

  </ApolloProvider>
)

export default App
