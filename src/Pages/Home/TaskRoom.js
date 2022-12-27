import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TaskRoom = () => {
    const [tasksName, setTasksName] = useState("")
    console.log(tasksName)
    const current = new Date();
    const currDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submited")
        console.log(tasksName)
        const tasksData = {
            tasksName,
            name: "Muhammad Abdullah",
            email: "tasks@gmail.com",
            currDate
        }
        axios.post('http://localhost:5000/tasks', tasksData)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className='min-h-screen px-11 py-16'>
            <div class="flex flex-col justify-center items-center">
                <label htmlFor="last-name" className=" text-sm font-medium text-gray-700">Add Task Field</label>
                <form onSubmit={handleSubmit} action="">
                    <input type="text" name="tasksName" className="mt-2 border border-gray-300 py-2 bg-white rounded-lg  w-64 outline-none px-5"
                        placeholder='add a task'
                        onChange={e => setTasksName(e.target.value)}
                        value={tasksName}
                        autoComplete="off"
                    />
                    <button type='submit'></button>
                </form>
            </div>
        </div>
    );
};

export default TaskRoom;