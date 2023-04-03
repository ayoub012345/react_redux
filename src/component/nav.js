import React from "react";
import "./stl.css";
import { Link } from "react-router-dom";

function Nav()
{
 return(
    <ul>
  <li><Link to="/">list of tasks</Link></li>
  <li><Link to="newtodo" >Add new task</Link></li>
</ul>
 );   
}
export default Nav;