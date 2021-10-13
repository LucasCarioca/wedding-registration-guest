import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
      <Router>
        <div>
          <div style={{marginTop: "2rem"}}>
            <Routes/>
          </div>
        </div>
      </Router>
  );
}

export default App;
