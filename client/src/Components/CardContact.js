

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { deleteContact } from "../Redux/Actions"
import { useDispatch } from "react-redux"

const CardContact = ({el}) => {
  const dispatch = useDispatch()
    return ( 
    
      <Card className='cardStyle'  style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="/Avatar.png" style={{ width: '7rem' }}/> */}

      <Card.Body>
        <Card.Title className='display-7 StyleTitle'>{el.name}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">{el.age}</Card.Subtitle>
        <Card.Text>
          {el.email}
        </Card.Text>
        <Button as={Link} to={`/EditContact/${el._id}`} className='btn btn-dark StyleButton'>Edit</Button>
        <Button  onClick={()=>dispatch(deleteContact(el._id))} className='StyleButton' variant='danger'>Delete</Button>

        
      </Card.Body>
    </Card>
      
    )
  }
  
  export default CardContact