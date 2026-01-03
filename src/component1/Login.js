import React from "react";
import axios from "axios";
import {useState} from "react";

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [formData,setFromData]=useState({ 
        email:"",
        password:""
    })

const handleLogin=async(e)=>{
    e.preventDefault();

    const payload={
        email:email, 
        password:password,
    };

    try{
        const res=await axios.post(
            "https://reqres.in/api/login", //eve.holt@reqres.in pass-cityslicker
            payload,
            {
                headers:{
                    "x-api-key": "reqres-free-v1",
                },
            }
        );
    
        localStorage.setItem("login",res.data.token);
        console.log("data view",res);
        if(res.status===200){
            console.log("success");
        } 
    } catch(error){
        console.error("Login failed:");
    }
};

return(
    <div>
        <form  className="p-3">
            <label>Email</label>
            <input type="text"
            value={email}
            className="border border-black"
            onChange={(e)=> setEmail(e.target.value)}
            />
            <label>Password</label>
            <input type="password"
            value={password}
            className="border border-black"
            onChange={(e)=> setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="bg-amber-700 text-white p-3">
                Login
            </button>
        </form>
    </div>
);
}
export default Login