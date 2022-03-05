import "./style.css"
import { Routes, Route } from "react-router-dom";
import ResumePage from "./pages/ResumePage"
import Home from "./component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exect path="/resume" element={<ResumePage/>} />
      </Routes>
    </>
  );
}

export default App;
