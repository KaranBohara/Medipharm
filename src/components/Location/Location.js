import React from 'react';
import './Location.css';
import AddLocationIcon from '@mui/icons-material/AddLocation';


const Location = () => {
  return (
    <div className='location-container'>
    <AddLocationIcon/> <span style={{marginLeft:".5rem"}}>Location</span></div>
  )
}

export default Location