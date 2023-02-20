import { useState } from 'react';

const useTodo = () => {
  const [tasksSet, setTasks] = useState([]);
  const addTask = (value) =>
    setTasks([...tasksSet, { id: Date.now(), body: value, isDone: false }]);
  // console.log(tasksSet);

  const deleteTask = (id) => {
    setTasks(tasksSet.filter((task) => id !== task.id));
  }

  const isDoneTask = (id) => {
    setTasks(tasksSet.map((task) => id === task.id ? { ...task, isDone: !task.isDone } : task));



  };


  return { tasksSet, addTask, deleteTask, isDoneTask };
}
export default useTodo;