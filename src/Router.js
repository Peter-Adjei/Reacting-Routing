import React from 'react';
import { BrowserRouter as AppRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import { Routes } from 'react-router-dom';
import ServiceDetails from './components/ServiceDetails';

const Router = () => {
    return (
        <AppRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link  to="/about">About</Link>
                <Link  to="/contact">Contact</Link>
                <Link  to="/services">Services</Link>
               
            </nav>
            <hr />
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/about' Component={About}/>
            <Route path='/contact' Component={Contact}/>
            <Route exact path='/services' Component={Services}/>
            <Route path='/services/:id' Component={ServiceDetails}/>
       </Routes>    
        </AppRouter>
    );
}

export default Router;
