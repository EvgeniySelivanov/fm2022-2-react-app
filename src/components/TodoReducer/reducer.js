const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASKS': {
      const newTask = {
        id: Date.now(),
        isDone: false,
        body: action.payload
      }

      return { ...state, tasks: [...state.tasks, newTask] };

    }
    case 'DELETE_TASKS': {
      const {payload:id}=action;
      return { 
        ...state,
        tasks: state.tasks.filter((task) => id !== task.id) };

    }
    case 'IS_DONE_TASKS': {
      const {payload:id}=action;

      return {
        ...state,
        tasks: state.tasks.map((task) => id === task.id ? { ...task, isDone: !task.isDone } : task)
      }
    }
    default:
      return state;
  }

}
export default reducer;