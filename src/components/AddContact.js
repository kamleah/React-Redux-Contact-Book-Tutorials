import React,{useState} from 'react'
// import { createStore } from 'redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { addContat } from '../Action/contactAction'
const AddContact = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const createContact = e =>{
        e.preventDefault();
        console.log(Name,Phone,Email)
        const new_contact = {
            Name:Name,
            Phone:Phone,
            Email:Email
        };
        dispatch(addContat(new_contact));
        history.push("/");
    };
    return (
        <div className="card border-0 shadow">
            <div className="card-header">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => createContact(e)}>
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
                    <button className="btn btn-primary">Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
