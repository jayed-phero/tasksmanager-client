import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import MyTasksRow from './MyTasksRow';
import UpdateTasks from './UpdateTasks';

const MyTasks = () => {
    const [taskInfo, setTaskInfo] = useState(null)
    const {user} = useContext(AuthContext)

    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['postedtasks'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/postedtasks?email=${user?.email}`)
            .then(res => res.json())
    })
    console.log(tasks)

   

    return (
        <div className='min-h-screen py-16  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 bg-gray-100'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-auto max-w-7xl px-4 sm:px-6">
                {
                    tasks.length === 0 ?
                        <h3 className='text-center text-xl font-semibold'>There is no Tasks added by You !!!</h3>
                        :
                        tasks.map(task =>
                            <MyTasksRow key={task._id} task={task} setTaskInfo={setTaskInfo} refetch={refetch} />
                        )
                }
            </div>
            {
                <UpdateTasks taskInfo={taskInfo} setTaskInfo={setTaskInfo} refetch={refetch} />
            }
        </div>
    );
};

export default MyTasks;