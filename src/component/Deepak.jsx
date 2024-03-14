import React, { useState } from 'react';

export default function Deepak() {
  const [inputList,setInputList]=useState("");
  const [dev,setdev]=useState([]);
  const deepEvent =(event)=>{
    setInputList(event.target.value);
  };
  const listof=()=>{
    setdev((oldItem)=>{
      return [...oldItem,inputList];
    });

  };
  return (
    <>
      <div id="ram">
       <div className='center'>
        <br/>
      <h1> ToDo List[Deepak]</h1>
      <input type='text' placeholder='add new items' onChange={deepEvent}/>
      <button onClick={listof}>+</button>
      
      <ol>
        {/*<li>{inputList}</li>*/}
       {dev.map((itemvalue,index)=>{
        return <li key={index}>{itemvalue}</li>;
       })}
      </ol>

       </div>
      </div>
    </>
  )
}
