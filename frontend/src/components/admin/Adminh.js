
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import React, { useState, useRef, useEffect, useContext } from 'react'
import '../styles/tour-details.css'
// import tourData from '../assets/data/tours'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/Newsletter'


import { AuthContext } from '../context/AuthContext'

export default function Adminh({users}){
    const { id } = useParams()
   const reviewMsgRef = useRef('')
   const [tourRating, setTourRating] = useState(null)
   const { user } = useContext(AuthContext)
    const [data, setData] =useState([]);
    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`)
    const { photo, title, desc, price, reviews, city, address, distance, maxGroupSize } = tour
    useEffect(()=>{
        fetch("http://localhost:5000/getALLUser",{
            method:"GET",
        })
        .then((res)=>res.json())
        .then((data) => {
            console.log(data,"userdata")
            setData(data.data);
        });
    },[]);
    const logout = ()=>{
        window.localStorage.clear();
        window.location.href ="/"
    };

    return(
        <div className="auth-wrapper">
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
                    {data.map(i=>{
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
    );
}