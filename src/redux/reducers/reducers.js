//<></>
import { ADD,DONE,NOT, ROM } from "../actions/ations";
    const Task_reduccer=(state=[{id:"0000000001",task_nam:"task 1 name",task_des:"task 1 description",isdon:true},{id:"0000000002",task_nam:"task 2 name",task_des:"task 2 description",isdon:false},{id:"0000000003",task_nam:"task 3 name",task_des:"task 3 description",isdon:true}],action)=>{

    switch(action.type)
    {
        case ADD:
            return state=JSON.parse(localStorage.getItem('task'));
        case DONE:
            state=JSON.parse(localStorage.getItem('task'));
            return state.filter(task => task.isdon===true );
        case NOT:
            state=JSON.parse(localStorage.getItem('task'));
            return state.filter(task => task.isdon===false );
        case ROM:
            return state=JSON.parse(localStorage.getItem('task'));
        default:return state;
    }
}
export default Task_reduccer;