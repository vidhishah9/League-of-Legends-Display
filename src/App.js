import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import GameInfo from "./pages/GameInfo"
 

function App() {
  return (
    <div className = "App">
      <Router>
        <Routes>
          <Route path = "/Home" element = {<Home />} />
          <Route path = "/GameInfo" element = {<GameInfo />}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;

