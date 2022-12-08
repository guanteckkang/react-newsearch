//apikey= 794e8d64a0c54faea73079e75b51cef6
// api https://newsapi.org/v2/top-headlines?country=us&apiKey=794e8d64a0c54faea73079e75b51cef6

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Home from "./components/home/home";
import NotFound from "./components/404/404";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
