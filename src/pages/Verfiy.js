import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


function Verfiy() {
    const params = useParams()
    const {id} = params
    useEffect(()=>{
        const verify = async () => {
            const a = await axios.get(`https://aman-netflix.onrender.com/${id}`)
            if(a)
            {
                console.log(a)
            }
        }
        verify()
    },[])
    

    // console.log(params)
  return (
    <div>
        
      verified
    </div>
  )
}

export default Verfiy
