import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import Register from "./views/Register";
import { UserProvider } from "./contexts/userContext";
import Piratas from "./views/Piratas";
import Detail from "./views/Detail";
import Create from "./views/Create";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <ul className="menu1">
            {/* <div>
              <Link to="/">Main</Link>
            </div> */}
           {/*  <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/registro">Registro</Link>
            </div> */}
          </ul>

          <Routes>
            <Route path="/" element={<Main /> } />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/registro" element={<Register></Register>} />
            <Route path="/piratas" element={<Piratas />} />
            <Route path="/piratas/:id" element={<Detail />} />
            <Route path="/piratas/new" element={<Create />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;