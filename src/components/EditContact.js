import React,{useState,useEffect} from 'react'
// import { createStore } from 'redux'
import { useDispatch,useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getContact,updateContact } from '../Action/contactAction'
import Contact from './Contact'


const EditContact = () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const contact = useSelector((state)=>state.contact.contact)
    const history = useHistory();
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    
    useEffect (()=>{
        if(contact !=null){
            setName(contact.Name)
            setEmail(contact.Email)
            setPhone(contact.Phone)
        }
        dispatch(getContact(id))
    },[contact])

    const onUpdateContact= e =>{
        e.preventDefault();
        const update_contact=Object.assign(contact,{
            Name:Name,
            Phone:Phone,
            Email:Email,
        })
        console.log(update_contact)
        dispatch(updateContact(update_contact))
        history.push("/")

    }
        return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e)=>onUpdateContact(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="enter your name"
                        value={Name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="enter your phone number" 
                        value={Phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="enter your email" 
                        value={Email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-warning">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact;
