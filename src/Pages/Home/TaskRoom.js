import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SmallSpinner from '../../Shared/SmallSpinner';
import SpinnerSmall from '../../Shared/SpinnerSmall';

const TaskRoom = () => {
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("")
    const current = new Date();
    const currDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submited")
        const tasksData = {
            title,
        }
        setLoading(true)
        axios.post(`${process.env.REACT_APP_API_URL}/tasks`, tasksData)
            .then(res => {
                console.log(res)
                setLoading(false)
                navigate('/mytasks')
            })
            .catch(err => {
                console.log(err)
            })
    }

    // const { data: tasks = [], isLoading } = useQuery({
    //     queryKey: ['postedquery'],
    //     queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/postedtasks`)
    //         .then(res => res.json())
    // })


    return (
        <div className='min-h-screen px-11 py-16 bg-gray-100 dark:bg-gray-800 '>
            <div className="flex items-center justify-center">
                <div class="flex flex-col justify-center items-center">
                    <label htmlFor="last-name" className=" text-sm font-medium text-gray-700 dark:text-gray-300">Add Task Field</label>
                    <form onSubmit={handleSubmit} action="">
                        <div className='relative'>
                            <input type="text" name="tasksName" className="mt-2 border border-gray-300 py-3 bg-white rounded-lg  md:w-72 w-full outline-none px-5 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                                placeholder='add a task'
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                                autoComplete="off"
                            />
                            <p className='absolute top-5 right-3  bg-blue-500  rounded-full px-1  dark:text-gray-300 text-white'>{
                                loading ?
                                    <SmallSpinner/>
                                    :
                                    <i class="fa-solid fa-plus font-semibold"></i>
                            }</p>
                        </div>
                        <button type='submit'></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TaskRoom;