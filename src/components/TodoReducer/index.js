import React, { useReducer } from 'react';
import { Formik, Form, Field } from 'formik';
import reducer from './reducer';
import { TASK_SCHEMA } from '../../utils/validationSchemas'


const TodoReducer = () => {

  const [state, dispatch] = useReducer(reducer, { tasks: [{ id: Date.now(), body: 'test', isDone: false }] })
  const onSubmit = (values, formikBag) => {
    dispatch({ type: 'ADD_TASKS', payload: values.body });
    formikBag.resetForm();
  };
  const handlerDelete = (id) => {
    dispatch({ type: 'DELETE_TASKS', payload: id })
  }
  const handlerIsDone = (id) => {
    dispatch({ type: 'IS_DONE_TASKS', payload: id })
  }
  const mapTasks = (task) => {
    return <article key={task.id}>
      <p>
        <input type='checkbox' checked={task.isDone} name='isDone' onChange={() => handlerIsDone(task.id)} />
        {task.body}
        <button onClick={() => handlerDelete(task.id)}>X</button>
      </p>
    </article>
  }
  return (
    <div>
      <section>
        <h3>new task</h3>
        <Formik onSubmit={onSubmit} initialValues={{ body: '' }} validationSchema={TASK_SCHEMA}>
          <Form>
            <Field name='body' />
            <input type='submit' value='add' />
          </Form>
        </Formik>
      </section>
      <section>
        <h3>tasks</h3>
        {
          state.tasks.map(mapTasks)
        }
      </section>
    </div>
  );
}

export default TodoReducer;
