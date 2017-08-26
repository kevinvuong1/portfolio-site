import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Header/>
              <Switch>
                <Route exact path="/" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={Projects} />
              </Switch>
            <hr/>
            <Footer/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
