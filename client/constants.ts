import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Query {
    getAllUsers {
      name
      surname
      address
      email
      phone
    }
  }
`;
