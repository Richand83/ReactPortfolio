import React, {Component} from 'react';
import logo from './logo.svg';
import Nav from './component/nav';
import Home from './component/home';
import About from './component/about';
import Portfolio from './component/portfolio';
import Resume from './component/resume';
import Contact from './component/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
            <Nav></Nav>
                  <Home></Home>
                  <About></About>
                  <Portfolio></Portfolio>
                  
                  <Contact></Contact>

        </div>
      </div>
    );
  }
}

export default App;
