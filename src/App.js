  import "./App.css";
  import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
  import Home from "./components/Home";
  import About from "./components/About";
  import Users from "./components/Users";
  import 'bootstrap/dist/css/bootstrap.min.css';

  function App() {
    return (
      <Router>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
