import React from 'react'

function Learning2() {
  const a=["apple","orange","banana"]
  return (
    //map method
    <div>
      {a.map((item)=> (
        <p>{item}</p>
      ))} 
      
       </div>
  )
}

export default Learning2 