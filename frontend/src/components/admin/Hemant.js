import React, { useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection'
// import tourData from '../assets/data/tours'
import '../styles/tour.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'


const Tours = () => {
   const [pageCount, setPageCount] = useState(0)
   const [page, setPage] = useState(0)

   const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`)
   const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)

   useEffect(() => {
      const pages = Math.ceil(tourCount / 8)
      setPageCount(pages)
      window.scrollTo(0,0)
   }, [page, tourCount, tours])
   return (
    <><div className="auth-wrapper">
    <div className="auth-inner">
        <h3> welcome admin</h3>
        <table style={{width:500}}>
            <tr>
                <th>
                    name 
                </th>
                <th>
                    email
                </th>
                <th>
                    user type 
                </th>
                <th>
                    delete
                </th>
            </tr>
            {Tours.map(i=>{
                return(
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>{i.role}</td>
                        <td>{i.name}</td>
                    </tr>
                )
            })}
        </table>
        <button onClick={logout} className="btn btn-primary">logout</button>
    </div>
</div>
</>
);
}