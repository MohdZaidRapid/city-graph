import { useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import TableData from "./components/TableData";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/table" element={<TableData />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
