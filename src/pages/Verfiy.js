import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Verfiy() {
    const params = useParams()
    const navigate = useNavigate();
    const {id} = params
    let a ;
    let b;
    useEffect(()=>{
        const verify = async () => {
             a = await axios.get(`https://aman-netflix.onrender.com/${id}`)
             b = a.data
             console.log(b)
            if(b)
            {
                navigate('/login');
            }
        }
        verify()
    })
    
    const click = () => {
        return window.location.reload();
    }
    // console.log(params)
  return (
    <div>
        verifing
        if it didn't let you go to login page <p onClick={()=>click()} className='underline'>click here</p> 
      {/* {a.data ? <div> verified</div>: <div>
        verifing
      </div>} */}
    </div>
  )
}

export default Verfiy
