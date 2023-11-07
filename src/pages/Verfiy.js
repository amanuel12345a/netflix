import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Verfiy() {
    const params = useParams()
    const navigate = useNavigate();
    const {id} = params
    useEffect(()=>{
        const verify = async () => {
            const a = await axios.get(`https://aman-netflix.onrender.com/${id}`)
            if(a.data)
            {
                navigate('/login');
            }
        }
        verify()
    },[])
    

    // console.log(params)
  return (
    <div>
        
      {a.data ? <div> verified</div>: <div>
        verifing
      </div>}
    </div>
  )
}

export default Verfiy
