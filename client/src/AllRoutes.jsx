import React from "react";
import{Routes,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth';
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DispalyQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Users from "./Pages/Users/Users";
const AllRoutes=()=>{
 return(
    <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/Auth" element={<Auth />} />
        <Route path="/Questions" element={<Questions />}/> 
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route path="/Questions/:id" element={<DispalyQuestion />} />
        <Route path="/Tags" element={<Tags/>} />
        <Route path="/Users/:id" element={<UserProfile/>} />
        <Route path="/Users" element={<Users />} />
    </Routes>
 )
}
export default AllRoutes;