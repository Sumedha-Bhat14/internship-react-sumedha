import React from 'react'

function Learning1() { 
  // let arry=["ram","sham","bham",50,23]
//form handling
let handleChange=(e)=>{
console.log((e.target.value)) 
}

  const handleSubmit=(event)=>{
    event.preventDefault() 
  }
  return (
    <div>
      <form onClick={handleSubmit}>
        <label> Name </label>
        <input onChange={handleChange} type="text"/>
        <label> Passowrd</label>
        <input onChange={handleChange} type="password"/> 
        <button type="submit">Submit</button>
      </form> 
      {/* {arry.map((item)=>(
        <p>{item}</p> */}
      {/* ))} */} 
 
    </div>
  )
}

export default Learning1 