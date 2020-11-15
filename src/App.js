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

function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
