import './App.css';
import {AddTask} from "./components/AddTask";
import logo from "./components/images/2.jpg";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadTasks} from "./store";
import {Task} from "./components/Task";

function App() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state);
  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);
  return (
      <div className="App">
        <div className="background">
          <img className="logo" src={logo} alt={logo}/>
        </div>
        <div>
          <h1 className="title">My Tasks</h1>
          {tasks.map((task, i) =>
              <Task key={i}
                    tasks={task}
              />)}
        </div>
        <AddTask/>
      </div>
  );
}

export default App;
