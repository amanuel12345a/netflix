import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


function Verfiy() {
    // axios.get('https://aman-netflix.onrender.com')
    const params = useParams()
  return (
    <div>
        {params}
      verified
    </div>
  )
}

export default Verfiy
