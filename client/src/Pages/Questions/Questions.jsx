import React from "react";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import Rightsidebar from "../../Components/Rightsidebar/Rightsidebar";
import HomeMainbar from "../../Components/HomeMainbar/HomeMainbar";
import "../../App.css";
const Questions=()=>{
 return(
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className="home-container-2">
         <HomeMainbar />
         <Rightsidebar />
      </div>
    </div>
 )
}
export default Questions;