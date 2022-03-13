import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Flores from './Flores'
import About from './About'
import '../assets/css/style.css';

export default function RouterPage() {
  return (
      <Router>
          <Routes>
              <Route path='/' exact component={Flores} />
              <Route path='/about' component={About} />
          </Routes>
      </Router>
  )
}
