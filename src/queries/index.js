import { gql } from '@apollo/client'

export const DELETE = gql`

mutation{
  deleteAll
  {
    numx
    numy
    resmult
    id
  }
}

`

export const RESULTS_QUERY = gql `
  query{
  results {
      id
      numx
      numy
      resmult
  }
}
` 

export const ADD_NEW =  gql`
  mutation($numx: String!, $numy: String!) {
    addResult(
        numx: $numx
        numy: $numy
        ){
          numx
          numy
          resmult
          id
        }
}

`