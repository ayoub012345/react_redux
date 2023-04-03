import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ROM } from "../redux/actions/ations";
function Task()
{
  const dis=useDispatch();
  let { id } = useParams();
  let task=JSON.parse(localStorage.getItem("task"));
  let task_=JSON.parse(localStorage.getItem("task"));
  task=task.filter(task => task.id===id );

  function isdon()
  {
    if(document.getElementById("true").checked === true)
    task[0].isdon=true;
    if(document.getElementById("false").checked === true)
    task[0].isdon=false;
    
    for(let x of task_)
    {
      if(x.id===id)
      {
        x.isdon=task[0].isdon;
      }
    }
     localStorage.setItem("task",JSON.stringify(task_));
     dis(
       {type:ROM}
     )

   }
    //<></>
    return (
        <div className="form">
  <div className="title">Welcome</div>
  <div className="subtitle">This is the task</div>
  <div className="input-container ic2">
    <input id="taskid" className="input" readOnly value={`id:${id}`} type="text" placeholder=" " />
  </div>
  <div className="input-container ic1">
    <input id="taskname" className="input" readOnly value={task[0].task_nam} type="text" placeholder=" " />
    <div className="cut"></div>
    <label for="taskname" className="placeholder">name</label>
  </div>
  <div className="input-container ic2">
    <textarea id="taskdescription" rows="" cols="" className="input" type="text" readOnly value={task[0].task_des} placeholder=" " ></textarea>
    <div className="cut"></div>
    <label for="taskdescription" className="placeholder">description</label>
  </div>
  <div className="input-container icll">
    <input onChange={isdon} type="radio" name="choi" id="true"/>is don<br/>
    <input onChange={isdon} type="radio" name="choi" id="false"/>is not don
  </div>
  
  <Link to="/"><button type="text" className="submit">return</button></Link>
</div>
    )
}
export default Task;