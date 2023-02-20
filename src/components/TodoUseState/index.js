import React from 'react';
import { useTodo } from '../../hooks';
import { Formik, Form, Field } from 'formik';
import { TASK_SCHEMA } from '../../utils/validationSchemas';

const TodoUseState = () => {
  const { tasksSet, addTask, deleteTask, isDoneTask } = useTodo();
  const onSubmit = (values, formikBag) => {
    addTask(values.body);
    formikBag.resetForm();
  }
  
  const mapTasks = (task) => {
    return <article key={task.id}>
      <p>
        <input type='checkbox' checked={task.isDone} name='isDone' onChange={() => isDoneTask(task.id)} />
        {task.body}
        <button onClick={() => deleteTask(task.id)}>X</button>
      </p>
    </article>
  }

  return (
    <div>
      <section>
        <Formik onSubmit={onSubmit} initialValues={{ body: '' }} validationSchema={TASK_SCHEMA}>
          <Form>
            <Field name='body' />
            <input type='submit' value='add' />
          </Form>
        </Formik>
      </section>
      <section>
      {tasksSet.map(mapTasks)}
      </section>
    </div>
  );
}

export default TodoUseState;
