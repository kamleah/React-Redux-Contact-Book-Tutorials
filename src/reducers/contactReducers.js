import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACTS,
} from "../constant/Types";
const initialState = {
  users: [
    {
      id: 1,
      Name: "Krish Gupta",
      Phone: "123456",
      Email: "krish.lee@learningcontainer.com",
    },
    {
      id: 2,
      Name: "racks",
      Phone: "123456",
      Email: "racks.jacson@learningcontainer.com",
    },
    {
      id: 3,
      Name: "denial",
      Phone: "33333333",
      Email: "denial.roast@learningcontainer.com",
    },
    {
      id: 4,
      Name: "devid",
      Phone: "222222222",
      Email: "devid.neo@learningcontainer.com",
    },
    {
      id: 5,
      Name: "jone",
      Phone: "111111111",
      Email: "jone.mac@learningcontainer.com",
    },
  ],
  contact: null,
  selectedContact: [],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case GET_CONTACT:
      let arr = state.users.filter((contact) => contact.id === action.payload);
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        users: state.users.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        users: state.users.filter((contact) => contact.id !== action.payload),
      };
    case DELETE_SELECTED_CONTACTS:
      return {
        ...state,
        users: [],
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContact: [...action.payload],
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContact: [],
      };
    default:
      return state;
  }
};
