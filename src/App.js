import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
              color='#f11946'
              progress={10}
          />
          <Routes>
              <Route exact path="/" element={<News key="general" country="in" pageSize={10} category="general"/>}></Route>
              <Route exact path="/general" element={<News key="general" country="in" pageSize={10} category="general"/>}></Route>
              <Route exact path="/health" element={<News key="health" country="in" pageSize={10} category="health"/>}></Route>
              <Route exact path="/business" element={<News key="business" country="in" pageSize={10} category="business"/>}></Route>
              <Route exact path="/entertainment" element={<News country="in" key="entertainment" pageSize={10} category="entertainment"/>}></Route>
              <Route exact path="/sports" element={<News key="sports" country="in" pageSize={10} category="sports"/>}></Route>
              <Route exact path="/science" element={<News key="science" country="in" pageSize={10} category="science"/>}></Route>
              <Route exact path="/technology" element={<News key="technology" country="in" pageSize={10} category="technology"/>}></Route>
          </Routes>
        </div>
      </Router>
      
      
    )
  }
}


