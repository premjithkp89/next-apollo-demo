import { graphql } from 'react-apollo'
import { useState } from 'react';
import { gql, useQuery,useApolloClient } from '@apollo/client';

import { Button, Card, Grid, Row, Text } from "@nextui-org/react";

const GET_USERS = gql`
query
  Query {getAllUsers {
    name
    address
    email
    phone
  }
}
`

  function App() {

    const { loading, error, data } = useQuery(GET_USERS)
    const [currentIndex,setData] = useState(20)
    !loading  && console.log("data",data.getAllUsers[0].name);


const loadMore =()=>{

  setData(currentIndex + 20)
}


  return (
    <div>
  <Grid.Container gap={2} justify="flex-start">
    { !loading && data.getAllUsers.slice(0,currentIndex).map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
         <Card isPressable>
          <Card.Body css={{ p: 0 }}>
          <Text b>{item.name}</Text>
          <Text b>{item.address}</Text>
          <Text b>{item.email}</Text>
          <Text b>{item.phone}</Text>
          </Card.Body>
        </Card>
       </Grid>
      ))}
  </Grid.Container>
  <Button style={{margin:'auto'}} onClick={loadMore}>LOAD MORE</Button>
  </div>
  );
}


const query = gql`
  query name {
    name
  }
`

export default App
