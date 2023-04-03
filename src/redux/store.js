import { createStore } from "redux";
import Task_reduccer from "./reducers/reducers";
const store_=createStore(Task_reduccer);
export default store_;