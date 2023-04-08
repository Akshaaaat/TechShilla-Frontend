import Login from './components/login/Login.js'
import Home from './components/homepage/Home.js'
import Navbar from './components/navbar/Navbar.js'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar> 

        <Routes>
          <Route exact path="/" element={
            <Home />
          } />
          <Route exact path="/login" element={
            <Login />
          } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
