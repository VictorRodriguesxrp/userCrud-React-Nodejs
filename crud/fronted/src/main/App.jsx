import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import Footer from '../components/template/Footer'
import Logo from '../components/template/Logo'
import Routes from './Routes'
import Nav from '../components/template/Nav'

export default props =>
  <BrowserRouter>
    <div className="app">
      <Logo />

      <Nav />

      <Routes />

      <Footer />
    </div>
  </BrowserRouter>
