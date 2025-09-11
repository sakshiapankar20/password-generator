import React, { useState } from 'react';
import Navbar from './components/Navbar';

function Hooks() {

    const [count, setCount]=useState(0);

    
    
    return(
        <>
        <hr />
        <h1>
            we are going to learn react hooks
        </h1>

        <div style={{
            border:'none',
            height: '200px',
            display:'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            width:'300px',
            margin: 'auto',
            backgroundColor:'black',
            boxShadow:'2px 4px 2px white',
            borderRadius:'10px'


        }}>
        <div>the count is <b style={{color:'Highlight'}}>{count}</b></div>

        <div style={{display:'flex',
            gap:'10px'
        }}>
        <button
            style={{
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '8px 6px',
                fontWeight:'bolder',
                marginTop: '10px',
                
            }}
            onClick={()=>setCount(count+1)}>
                Update Count
        </button>
        <button
            style={{
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '8px 6px',
                fontWeight:'bolder',
                marginTop: '10px',
                
            }}
            onClick={()=>setCount(count-1)}>
                Reduce Count
        </button>
        
       </div>
        </div>
        
        </>
    )
}

export default Hooks;