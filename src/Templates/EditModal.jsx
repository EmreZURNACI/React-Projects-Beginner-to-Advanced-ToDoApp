import React, { useState } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useToDoCon } from '../Contexts/ToDoContext';
function EditModal({ data_index }) {
    const [value, setValue] = useState();
    const { open, setOpen, setTodos, todos } = useToDoCon();
    const editTodo = () => {
        var newArr = null;
        newArr = todos;
        todos.forEach(todo => {
            if (todo.id === data_index) {
                todo.text = value;
            }
        });
        setTodos(newArr);
        setOpen(false);
    }
    return (
        <>
            <Modal isOpen={open} toggle={() => setOpen(false)}>
                <ModalHeader>
                    Edit Todo
                </ModalHeader>
                <ModalBody >
                    <input type="text" className="form-control border-1 border border-secondary" onChange={(e) => setValue(e.target.value)} />
                    <div className='d-flex justify-content-end gap-1 mt-2'>
                        <button className='btn btn-success' onClick={() => editTodo()}>Submit</button>
                        <button className='btn btn-danger' onClick={() => setOpen(false)}>Close</button>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default EditModal