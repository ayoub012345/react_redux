import React from "react";
import {ADD} from "../redux/actions/ations";
import { useDispatch } from "react-redux";
import "./stl.css"
function Addtask()
{
  const dis=useDispatch();
  function add()
  {
    if((document.getElementById("taskname").value!=="")||(document.getElementById("taskdescription").value!==""))
    {
      let list_=[];
      list_=JSON.parse(localStorage.getItem("task"));
      let new_task={
        id:id,
        task_nam:document.getElementById("taskname").value,
        task_des:document.getElementById("taskdescription").value,
        isdon:false
      }
      list_.push(new_task);
      localStorage.setItem("task",JSON.stringify(list_));
      document.getElementById("taskname").value="";
        document.getElementById("taskdescription").value=""
      dis(
      {type:ADD}
    )}else{alert("fill in all fields")}
  }
  let i=JSON.parse(localStorage.getItem("task")).length+1;
  let j=i.toString().length;
  var id=("0".repeat(10-j)).concat(i);
    return(
        <div className="form">
  <div className="title">Welcome</div>
  <div className="subtitle">add new task</div>
  <div className="input-container ic2">
    <input id="taskid" className="input" readOnly value={id} type="text" placeholder=" " />
  </div>
  <div className="input-container ic1">
    <input id="taskname" className="input" type="text" placeholder=" " />
    <div className="cut"></div>
    <label for="taskname" className="placeholder">task name</label>
  </div>
  <div className="input-container ic2">
    <textarea id="taskdescription" className="input" type="text" placeholder=" " />
    <div className="cut"></div>
    <label for="taskdescription" className="placeholder">task description</label>
  </div>
  <button type="text" onClick={add}className="submit">add</button>
</div>
    );
}
export default Addtask;