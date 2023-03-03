import React from 'react'
import Logo from '../assets/go-jim-logo.png'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'

function navbar() {
  return (
    <div className='navbar'>
        <div className = 'leftSide'> 
            <img src={Logo} />
        </div>
        <div className = 'rightSide'> 
          <Link to="/"> Home </Link>
          <Link to="/workout-videos"> Workout Videos </Link>
          <Link to="/workout-programs"> Workout Programs </Link>
          <Link to="/meal-plans"> Meal Plans </Link>
          <Link to="/custom-workouts"> Custom Workouts </Link>
          <Link to="/routines"> Routines </Link>
        </div>
    </div>
  )
}

export default navbar