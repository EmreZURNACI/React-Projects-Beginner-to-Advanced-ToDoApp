import { createContext, useContext, useState, memo } from "react";
const ToDoCon = createContext();
const ToDoConProvider = ({ children }) => {
    const [todo, setTodo] = useState({
        "id": null,
        "text": null,
        "isActive": true
    });
    const [todos, setTodos] = useState([]);
    const [open, setOpen] = useState(false);
    const [modalID, setModalID] = useState(false);
    const [clicked, setClicked] = useState(false);
    const datas = {
        todo, setTodo, todos, setTodos, open, setOpen, modalID, setModalID, clicked, setClicked
    }
    return (
        <ToDoCon.Provider value={datas}>
            {
                children
            }
        </ToDoCon.Provider>
    )
};
export default memo(ToDoConProvider);
export const useToDoCon = () => useContext(ToDoCon);