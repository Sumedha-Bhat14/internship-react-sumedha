import React from "react";
import Learning1 from "./Learning1";
import Learning2 from "./Learning2";
// function Demo1() {
//   const handleSubmit = () => {
//     alert("Hello world");
//   };
//   return (
//     <div>
//       <button onClick={handleSubmit}> Submit </button>
//     </div>
//   );
// }
// export default Demo1;

function Demo1() {
    // const handleSubmit = (x) => {
    //   alert(x);
    // }; 
    let Demo=false;
    // if(Demo){
    //     return <Learning1/>
    // }
    // return <Learning2/>
    return (
      <div>
        {Demo?<Learning1/> : <Learning2/>}  
        {/* <button onClick={()=>handleSubmit("im button")}> Submit </button> */}
      </div>
    );
  }
  export default Demo1;  
  
