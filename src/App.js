import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Courses from './components/pages/Courses';
import About from './components/pages/About';
import Events from './components/pages/Events';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/courses' component={Courses} />
          <Route path='/about' component={About} />
          <Route path='/events' component={Events} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
