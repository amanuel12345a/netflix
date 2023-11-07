import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


function Verfiy() {
    const params = useParams()
    const {id} = params
    useEffect(()=>{
        axios.get(`https://aman-netflix.onrender.com/${id}`)
    },[])
    

    // console.log(params)
  return (
    <div>
        
      verified
    </div>
  )
}

export default Verfiy
