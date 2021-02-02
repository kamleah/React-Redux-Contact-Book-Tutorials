import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App container">
      <div className="jumbotron">
        <Provider store={store}>
          <Router>
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route exact path="/contact/edit/:id" component={EditContact}></Route>
            </Switch>
          </Router>
        </Provider>
      </div>
    </div>
  );
}

export default App;
