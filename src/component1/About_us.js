import React, {useState} from "react"

function About_us() {
  // const [color,setColor]=useState("red");
  const [count,setCount]=useState(0);
  // const myStyle={
  //   color:"green",
  //   backgroundColor:"aqua",
  //   padding:"10px" 
  // } 

  // let handleUpdate=()=>{
  //   setColor("blue")
  // }
  let handleSubmit=()=> {
    setCount(count-1) 
  }
  const handleUpdate=()=>{ 
    setCount(count+1)
  }

  return (
    <div>
      <h1> About us</h1>
       {/* <div>{color}</div>
    <button onClick={handleUpdate}>Click here to update </button>  */}
    <div>{count}</div>
    
    <button onClick={handleUpdate}> Increase </button>
    <button onClick={handleSubmit}> Decrease </button>
    </div>
    // <div style={myStyle}> About_us </div>
    // <div style={{color:"red",backgroundColor:"blue"}}>About_us</div> 
  )
}

export default About_us 