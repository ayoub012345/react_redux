import React, { useEffect } from "react";
import { ROM,DONE,NOT } from "../redux/actions/ations";
import { useSelector,useDispatch } from "react-redux";
function Listtask()
{
  const valstate=useSelector(state=>state);
  const dis=useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('task')!=null)
    {
      dis(
        {type:ROM}
      )
    }else{
      localStorage.setItem("task",JSON.stringify(valstate));
    }
  },[])
  function don()
  {
    dis(
      {type:DONE}
    )
  }
  function not()
  {
    dis(
      {type:NOT}
    )
  }
  function show(event)
  {
    return window.location.href=`tasks/${event.target.value}`;
  }
    //<></>
    return (
        <div className="form">
  <div className="title">Welcome</div>
  <div className="subtitle">This is the list task</div>
  <button onClick={don}>tasks done</button>
  <button onClick={not}>tasks not done</button>
  {valstate.map((task)=>(<div className="input-container icl">
    <input id="taskname" className="input" readOnly value={task.task_nam} type="text" placeholder=" " />
    <input type="checkbox" checked={task.isdon}  id="taskcheck" className="input"/>
    <button value={task.id} onClick={show}>edit task</button>

    <div className="cut"></div>
    <label for="taskname" className="placeholder">task</label>
  </div>))}
</div>
    )
}
export default Listtask;