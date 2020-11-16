import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Sidebar from './Component/Sidebar/Sidebar';
import AddRentHouse from './Component/AddRentHouse/AddRentHouse';
import BookingList from './Component/BookingList/BookingList';

function App() {
  // hello world
  return (
    <Router>
      <Route path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/AddRentHouse">
        <Sidebar/>
      </Route>
      <Route exact path="/myRent">
        <AddRentHouse/>
      </Route>
      <Route exact path="/bookingList">
        <BookingList/>
      </Route>
    </Router>
    
  );
}

export default App;
