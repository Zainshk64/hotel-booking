import React, { use, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from '../src/pages/Home';
import Footer from './components/Footer';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import MyBooking from './pages/MyBooking';
import HotelRegis from './components/HotelRegis';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';
const App = () => {
  const isOwner = useLocation().pathname.includes('owner');
  const [RegForm,setreg]= useState(false);
  return (
    <div>
      {!isOwner &&<Navbar />}
    {RegForm && <HotelRegis/>}
      <div className="min-h-[70vh]">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetail/>}/>
          <Route path='/mybookings' element={<MyBooking/>}/>
          <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='addroom' element={<AddRoom/>} />
            <Route path='listroom' element={<ListRoom/>} />


          </Route>


        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
