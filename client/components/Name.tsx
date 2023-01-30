
import { useState } from 'react';
import {  useQuery } from '@apollo/client';

import { Button, Card, Grid,Text } from "@nextui-org/react";
import { GET_USERS} from '../constants';


  function UserData() {
    const { loading, error, data } = useQuery(GET_USERS)
    const [currentIndex,setData] = useState(20)


const loadMore =()=>{

  setData(currentIndex + 20)
}


  return (
    <div>
  <Grid.Container gap={2} justify="flex-start" data-testid="user-grid" >
    { !loading && data.getAllUsers.slice(0,currentIndex).map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
         <Card isPressable>
          <Card.Body css={{ padding: 10 }}>
          <Text b>{item.name} {item.surname}</Text>
          <Text >{item.address}</Text>
          <Text >{item.email}</Text>
          <Text >{item.phone}</Text>
          </Card.Body>
        </Card>
       </Grid>
      ))}
  </Grid.Container>
  <Button style={{margin:'auto'}} onClick={loadMore} data-testid="load-more">LOAD MORE</Button>
  </div>
  );
}


export default UserData
