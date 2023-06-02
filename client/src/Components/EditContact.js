import { Form,Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOneContact, updateContact } from "../Redux/Actions"
import { useNavigate, useParams } from "react-router-dom"

const EditContact=()=>{

    const {id}= useParams()
    const dispatch = useDispatch()

   

    
    useEffect(()=>{
        dispatch(getOneContact(id))
    },[])
    const oneContact = useSelector(state=>state.oneContacts)

    const [name,setName] = useState(oneContact.name)
    const [age,setAge] = useState(oneContact.age)
    const [email,setEmail] = useState(oneContact.email)

    useEffect(()=>{
        setName(oneContact.name)
        setAge(oneContact.age)
        setEmail(oneContact.email)
    },[oneContact])

    const navigate = useNavigate()
    const handleUpdate=(a)=>{
        a.preventDefault()
        dispatch(updateContact({name,age,email},id,navigate))
    }

    return(
        <div> <h1 className="titleheading"> Edit contact</h1> <br />
        <div className="StyleForm">
           
        <Form>
        <Form.Group className="mb-3"  controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter age" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

    
        <Button  onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </div>
        </div>
    )
}
export default EditContact