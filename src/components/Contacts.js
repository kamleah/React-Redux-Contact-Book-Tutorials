import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contact from "./Contact";
import { selectContact, clearAllContact,deleteSelectedContacts } from "../Action/contactAction";
const Contacts = () => {
  const [selectAll, setselectAll] = useState(false);
  const contact = useSelector((state) => state.contact.users);
  const selectedContacts = useSelector(
    (state) => state.contact.selectedContact
  );
  console.log("Contacts", contact);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectAll) {
      dispatch(selectContact(contact.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);
  return (
    <div>
      {selectedContacts.length > 0 ? (
        <button className="btn btn-danger mb-3" onClick={()=>dispatch(deleteSelectedContacts())}>Delete All</button>
      ) : null}
      <table className="table table-shadow">
        <thead className="bg-danger">
          <tr>
            <th scope="col">
              <div
                className="custome-control custome-checkbox"
                value={selectAll}
                onClick={() => setselectAll(!selectAll)}
              >
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custome-control-input"
                />
                <label
                  htmlFor="selectAll"
                  className="custome-control-lable"
                ></label>
              </div>
            </th>
            <th scope="col">First</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((contact) => {
            return <Contact contact={contact} selectAll={selectAll}></Contact>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
