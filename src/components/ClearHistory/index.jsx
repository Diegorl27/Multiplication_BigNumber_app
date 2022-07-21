import Button from 'react-bootstrap/esm/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useMutation } from '@apollo/client'
import { DELETE } from '../../queries'


export const ClearHistory = () => {

  const [deleteAll] = useMutation(DELETE)

 return(
    <Button variant="primary" className="m-4" onClick={()=>deleteAll() }>
      <strong>Clear History</strong>
    </Button>
 ) 
}
