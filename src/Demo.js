import React from 'react'
import TestImg from "./happy-woman-standing-indoors-drinking-citrus-beverage_171337-14305.jpg"

function Demo() {
  return (
    <div> <div>
    <div className="firstPage"> 
        <div className="u-layout">
          
   <img src={TestImg}></img> 
   </div>
   <div className="center">
   <h1> Prices </h1> 
   <p> Images from Freepik </p>
   <button type="button" className="btn"> Work with us </button> </div>
    </div>
</div>

<div>
    <div>
        <h1> Benefits </h1>
        <div className="page">
        <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex eacommodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiatnulla pariatur.</p></div>
   <div className="box">
     <h1> Test Day </h1>
    <h1> $12 </h1>
    <button type="button" className="btn"> Choose Package </button>

   <div className="boxx">
    <h1> Basic Bundle </h1>
    <h1> $55 </h1>
    <button type="button" className="btn"> Choose Package </button>
   </div>
   <div className="boxx">
    <h1> Advance Bundle </h1>
    <h1> $150 </h1>
    <button type="button" className="btn"> Choose Package </button>
   </div>
    </div>
</div>
</div>

<div>
    <div className>
    <h1> Frequently Question Asked </h1>
    <p> What is Naturopath? </p><br></br>
    <p> Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus
        aoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor 
        commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
    </div>
    <div className="form-page">
        <form className="form"> 
            <h1> How can i help you? </h1>
            <p>Please take a few moments to let me know about yourself and your health goals before we 
                start working together:</p> 
                <div>
                    {/* <label for="NameFormControlInput1" className="form-label"><ins> Name </ins></label> */}
                    <input type="Name" placeholder="Enter Name"></input>
                </div>

            <div>
                {/* <label for="exampleFormControlInput1" className="form-label"><ins> Email adresss </ins></label> */}
                <input type="email" placeholder="Enter Email"></input>
                </div>
        </form>
    </div> 
</div> 
</div>
  )
}

export default Demo