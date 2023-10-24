import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 18;
  render() {
    return (
      <div>
      <Router>
          <Navbar/>
          {/* <LoadingBar
            color='#f11946'
            progress={10}
          /> */}
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
            <Route exact path="business" element={<News key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
            <Route exact path="entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="health" element={<News key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
            <Route exact path="science" element={<News key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
            <Route exact path="sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
            <Route exact path="technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
          </Routes>
      </Router>
      </div>
    )
  }
}