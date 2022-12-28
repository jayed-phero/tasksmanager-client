import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TaskRoom = () => {
    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        axios.post(`${process.env.REACT_APP_API_URL}/tasks`, tasksData)
            .then(res => {
                console.log(res)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const { data: tasks = [], isLoading } = useQuery({
        queryKey: ['postedquery'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/postedtasks`)
            .then(res => res.json())
    })


    return (
        <div className='min-h-screen px-11 py-16'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
        </div>
    );
};

export default TaskRoom;