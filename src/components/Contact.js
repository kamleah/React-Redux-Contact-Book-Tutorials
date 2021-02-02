import React  from "react";
import Avatar from "react-avatar"
import { Link } from 'react-router-dom';
import {deleteContact} from '../Action/contactAction'
import {useDispatch} from 'react-redux';
const Contact = ({contact,selectAll}) => {
  
  const dispatch = useDispatch();
  const {Name,Phone,Email,id}=contact;
  return (
    <tr>
      <th scope="row">
        <div className="custome-control custome-checkbox">
          <input checked={selectAll}  type="checkbox" className="custome-control-input" />
          <label  className="custome-control-lable"></label>
        </div>
      </th>
      <td><Avatar className="mr-2" size="45" round={true} name={Name}/>{Name}</td>
      <td>{Phone}</td>
      <td>{Email}</td>
      <td className="actions">
          <Link to={`contact/edit/${id}`}>
                <span className="material-icons text-primary">edit</span>
          </Link>
          <Link to="#">
                <span className="material-icons text-danger" onClick={()=>dispatch(deleteContact(id))}>remove_circle</span>
          </Link>
      </td>
    </tr>
  );
};

export default Contact;
