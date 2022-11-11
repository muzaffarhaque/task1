
import './App.css';
import React from "react";
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Login from "./component/login/Login"
import Graph from './component/graph/Graph';

function App() {
  return (
    <div className="App">
    
        <BrowserRouter basename='/digitech'>
        <Routes>
          <Route exact path='/digitech' element={<Login/>}/>
          <Route path='/graph' element={<Graph/>}/>
        </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
