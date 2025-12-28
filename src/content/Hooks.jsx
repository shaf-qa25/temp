import { useState } from 'react'
import { useEffect } from 'react';
import React from 'react'





const Hooks = () => {
    const [count,setcount1]=useState(0);
    const [count2,setcount2]=useState(10);
    
 useEffect(()=>{
    console.log("my comment is updated...")
 },[count2]);
 useEffect(()=>{
    console.log("my comment is updated2345  ...")
 },[])


  return (
    <div className='bg-amber-500'>
        <div className='text-3xl'>hooks property</div>
        <p>count={count}</p>
        <h6>Number is{count %2==0 ? "even":"odd"}</h6>
                 <button onClick={()=>{
                     setcount1(count+1)
                }}> click me </button>
      <br />
         <button onClick={()=>{
         
            setcount1(count-1)
       
         }}> decrement</button>
         

         <div className='bg-blue-700 flex justify-between mx-auto' >

                <p>cont is: {count2}</p>
            <button className='rounded-full text-white ' onClick={()=>{setcount1(count2+1)}}>update1</button>
            <button className='rounded-full text-white 'onClick={()=>{setcount2(count2+1)}}>update2</button>
           
         </div>
        
    </div>
  );
};

export default Hooks
