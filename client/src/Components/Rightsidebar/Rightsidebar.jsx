import React from "react";
import './Rightsidebar.css';
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";
const Rightsidebar=()=>{
 return(
    <div className="right-sidebar">
      <Widget />
      <WidgetTags />
    </div>
 )
}
export default Rightsidebar;