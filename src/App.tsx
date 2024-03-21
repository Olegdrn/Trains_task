import React from "react";
import "./App.css";
import { Trains } from "./components/Trains/Trains";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Train } from "./components/Train/Train";

function App() {
  console.log("App");
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <header className="App-header">
            <h5>Trains test app</h5>
          </header>
          <div className="main">
            <Trains />
            <Routes>
              <Route path="/:id" element={<Train />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
