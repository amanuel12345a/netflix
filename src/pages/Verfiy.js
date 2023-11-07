import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


function Verfiy() {
    // axios.get('https://aman-netflix.onrender.com')
    const params = useParams()
    console.log(params)
  return (
    <div>
        
      verified
    </div>
  )
}

export default Verfiy
