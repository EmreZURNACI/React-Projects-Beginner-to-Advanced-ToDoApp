import './App.css';
import ToDoConProvider from './Contexts/ToDoContext';
import Form from './Templates/Form'
import Todos from './Templates/Todos';
import { memo } from 'react'
function App() {
  return (
    <ToDoConProvider>
      <Form />
      <Todos />
    </ToDoConProvider>
  );
}

export default memo(App);
