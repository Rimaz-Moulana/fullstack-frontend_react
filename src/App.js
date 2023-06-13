
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";


function App() {
  return (
    <div className="App">
    <Router>
    
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/adduser" element={<AddUser/>} />
      </Routes>
      
    </Router>
      
    </div>
  );
}

export default App;
