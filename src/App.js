import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component1/Home";
import About_us from "./component1/About_us";
import Contact from "./component1/Contact";
import Nopage from "./component1/Nopage";
import Login from "./component1/Login";
import Fetching from "./component1/Fetching";
import Design from "./Tailwand/Design";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about_us" element={<About_us />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/login" element={<Login />}></Route>
    //    <Route path="/fetch" element={<Fetching />}></Route> 
    //     <Route path="*" element={<Nopage />} />
    //   </Routes>
    <div>
      <Design/>
    </div>
  );
}

export default App;
