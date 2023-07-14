import React, { memo } from 'react';
import { useToDoCon } from '../Contexts/ToDoContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrAdd } from 'react-icons/gr';
function Button() {
    const { setClicked } = useToDoCon();
    return (
        <div className='my-auto'>
            <button type='submit' onClick={() => setClicked(true)} className='btn btn-secondary text-white px-3 py-2'> <GrAdd className='d-flex align-items-center justify-content-center'></GrAdd> </button>
        </div>
    )
}
export default memo(Button);