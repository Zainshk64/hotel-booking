import React from 'react'
import Navbar from './components/Navbar'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from '../src/pages/Home';
import Footer from './components/Footer';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
const App = () => {
  const isOwner = useLocation().pathname.includes('owner');
  return (
    <div>
      {!isOwner &&<Navbar />}
      <div className="min-h-[70vh]">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetail/>}/>

        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
