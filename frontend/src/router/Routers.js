import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import Adminlogin from '../pages/Adminlogin'
import Fetchdata from '../pages/Fetchdata'
import AdminHome from '../components/AdminHome'
import About from '../components/Header/About'


const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/Adminlogin' element={<Adminlogin/>}/>
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
         <Route path='/Fetchdata' element={<Fetchdata/>} />
         
         <Route path='/Adminhome' element={<AdminHome/>}/>
         <Route path='/about' element={<About/>}/>

      </Routes>
   )
}

export default Routers