import "./App.css";
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Form" element={<Form></Form>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
