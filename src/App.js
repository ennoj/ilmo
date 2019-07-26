import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Frontpage from './components/Frontpage';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Introduction from './components/Introduction';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Frontpage />
      <Projects />
      <Skills />
      <Introduction />
      <Contact />
    </Router>
  );
}

export default App;
