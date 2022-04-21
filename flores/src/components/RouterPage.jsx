import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Flores from './Flores'
import About from './About'
import Formulario from './Formulario'
import Lifecycle from './Lifecycle'

export default function RouterPage() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Flores />} />
                <Route path='/about' exact element={<About />} />
                <Route path='/contacto' exact element={<Formulario />} />
                <Route path='/contactos' exact element={<Lifecycle />} />
            </Routes>
        </Router>
    )
}
