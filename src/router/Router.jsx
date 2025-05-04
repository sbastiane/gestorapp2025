import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Booking from '../components/pages/Booking/Booking'
import Dashboard from '../components/pages/Dashboard/Dashboard'
import Header from '../components/commons/Header/Header'
import NotFound from '../components/pages/NotFound/NotFound'
import Footer from '../components/commons/Footer/Footer'
import FormularioReserva from '../components/commons/FormularioReserva/FormularioReserva'
import Beta from '../components/commons/Beta/Beta.jsx'


const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/formulario-reserva' element={<FormularioReserva />} />
        <Route path='/beta' element={<Beta />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Router

