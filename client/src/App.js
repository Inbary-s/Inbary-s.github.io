import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/' component={About}/>

    </Router>
   

  );
}

export default App;
