import React, { memo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from "nanoid";
import { useToDoCon } from '../Contexts/ToDoContext';
import { Helmet } from 'react-helmet';
import Button from './Button';
import EditModal from './EditModal';
function Form() {

  const { todo, setTodo, todos, setTodos, modalID, clicked, setClicked } = useToDoCon();
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector("input[type='text']");
    if ((todo.text === null) || (todo.text === " ") || todo.text === "") {

      alert("TEXT-KUTUSU-BOŞ-EKLENEMEZ");
    }
    else {
      setTodos([...todos, todo]);
    }
    input.focus();
    setClicked(false);
    setTodo({ "id": null, "text": null, "isActive": null });
  }
  return (
    <div className='container mt-5'>
      <Helmet>
        <title>
          Todo App
        </title>
      </Helmet>
      <div className="mb-3 row">
        <div className='col-8 px-0 mx-auto'>
          <form onSubmit={handleSubmit}>
            <div className='d-flex gap-1'>
              <input type="text" className="form-control border-1 border border-secondary" value={clicked === true ? "" : todo.placeholder} onChange={(e) => setTodo({ "id": nanoid(), "text": e.target.value, "isActive": true })} />
              <Button />
            </div>
            <EditModal data_index={modalID} />
          </form>
        </div>
      </div>
    </div >
  )
}

export default memo(Form);