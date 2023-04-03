import './App.css';
import Nav from './component/nav';
import Listtask from './component/listtask';
import Task from './component/task';
import Addtask from './component/addtask';
import store_ from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    //<></>
      <>
       <Provider store={store_}>
      <BrowserRouter>
      <>
       <Nav/>
       <Routes>
       <Route path='/' Component={Listtask}/>
       <Route path='newtodo' Component={Addtask}/>
       <Route path='tasksdon' Component={Listtask}/>
       <Route path='tasksnot' Component={Listtask}/>
       <Route path='tasks/:id' Component={Task}/>
       </Routes>
      
      </>
      </BrowserRouter>
      </Provider>
      </>
  );
}

export default App;
