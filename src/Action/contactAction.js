import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACTS,
} from "../constant/Types";

// Action for Create
export const addContat = (contact) => {
  return {
    type: CREATE_CONTACT,
    payload: contact,
  };
};

//Action for get edit contact data
// To create action using shorthand use rxa
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

// Action to update the contact

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

// Action to delete contact

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

//Select All Contact
export const selectContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});

// Clear selected contact
export const clearAllContact = (payload) => ({
  type: CLEAR_CONTACT,
});

// Delete Selected Contacts

export const deleteSelectedContacts = () => ({
    type: DELETE_SELECTED_CONTACTS    
})
