import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Nevbar/Home/Home';
import LogIn from './Component/LogIn/LogIn';

function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
