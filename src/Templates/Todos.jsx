import React, { memo, useState } from 'react';
import { useToDoCon } from '../Contexts/ToDoContext';
import { MdOutlineDeleteForever, MdEdit } from 'react-icons/md';
function Todos() {
  const { todos, setTodos, setOpen, setModalID } = useToDoCon();
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(0);
  const deleteTodo = (e) => {
    const silinecek_id = e.target.parentElement.parentElement.parentElement.children[1].getAttribute("id");
    setTodos(
      todos.filter(todo => {
        return silinecek_id !== todo.id
      })
    )
  }
  const finished = (e) => {
    const todo = e.target.id;
    const todo_id = todo.slice(9);
    const arr = todos;
    arr.forEach((item) => {
      if (item.id === todo_id) {
        item.isActive = !item.isActive;
      }
    });
    setTodos(arr);
    avaibleItems();
  };
  const avaibleItems = () => {
    setCount(0);
    todos.forEach((todo) => {
      if (todo.isActive === false) {
        setCount(prev => prev + 1);
      }
    });
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8 mx-auto p-0 border-1 border border-secondary p-3 rounded-2'>
          <h2 className='text-center pb-2'>Daily Todos</h2>
          <ul className='mx-auto p-0 mb-1'>
            {
              todos && todos.map((todo, index) => (
                <li key={index}
                  className={todo.isActive === false ? 'd-flex row border-1 border-secondary border align-items-center rounded-2 w-100 mx-auto opacity-50 ms-2'
                    : 'd-flex row border-1 border-secondary border align-items-center rounded-2 w-100 mx-auto'}>
                  <div className='col-2 border-secondary border-end justify-content-evenly d-flex align-items-center'>
                    <input type="checkbox" id={"checkBox-" + todo.id} onChange={(e) => { finished(e); setChecked(!checked) }} />
                    <span className='text-center rounded-1 fw-bold'>Todo {index + 1}</span>
                  </div>
                  <div className='list-unstyled  col-8 fw-bold' id={todo.id} key={index}>{todo.text}</div>
                  <div className='d-flex col-2 justify-content-center gap-1 border-1 border-start border-secondary rounded-1'>
                    <MdEdit className='cursor-pointer fs-2 text-warning' onClick={() => { setOpen(true); setModalID(todo.id); }}></MdEdit>
                    <MdOutlineDeleteForever className='cursor-pointer fs-2 text-danger' onClick={deleteTodo}></MdOutlineDeleteForever>
                  </div>
                </li>
              ))
            }
          </ul>
          {
            todos.length >= 1 ?
              <div className='d-flex justify-content-between  mx-auto mt-1 align-items-center'>
                <span className='fw-semibold text-bg-warning px-2 py-1 rounded-3'>You have {todos.length - count} pending todos</span>
                {
                  todos.length >= 2 ?
                    <div>
                      <button className='btn btn-danger' onClick={() => {
                        setTodos(todos.filter(todo => {
                          return todo.text === null
                        })); document.querySelector("input[type='text']").focus()
                      }}>Clear All
                      </button>
                    </div> : ""
                }
              </div> : ""
          }
        </div>
      </div>
    </div >
  )
}

export default memo(Todos)