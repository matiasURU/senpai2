import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Flores from './Flores'
import About from './About'

export default function RouterPage() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Flores />} />
                <Route path='/about' exact element={<About />} />
            </Routes>
        </Router>
    )
}
