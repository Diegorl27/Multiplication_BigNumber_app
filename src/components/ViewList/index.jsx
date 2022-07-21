import React from "react"
import { useQuery } from "@apollo/client"
import { RESULTS_QUERY } from "../../queries"
import { Table } from "react-bootstrap"
import Spinner from 'react-bootstrap/Spinner';


export const ViewList = () => {

 
  const { data, loading, error } = useQuery(RESULTS_QUERY)


  if (loading)
    return (
      <div className="text-center">
        <h2>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </h2>
      </div>
    )
  if (error) return console.log(error.message)

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>X-Data</th>
            <th>Y-Data</th>
            <th>Resolve</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map(({ id, numx, numy, resmult }) => (
            <tr key={id}>
              <td>{numx}</td>
              <td>{numy}</td>
              <td>{resmult}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
