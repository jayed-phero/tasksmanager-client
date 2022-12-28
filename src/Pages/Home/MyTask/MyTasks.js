import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyTasksRow from './MyTasksRow';
import UpdateTasks from './UpdateTasks';

const MyTasks = () => {
    const [taskInfo, setTaskInfo] = useState(null)
    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['postedquery'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/postedtasks`)
            .then(res => res.json())
    })
    console.log(tasks)

    return (
        <div className='min-h-screen py-16 '>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-auto max-w-7xl px-4 sm:px-6">
                {
                    tasks.length === 0 ?
                    <h3 className='text-center text-xl font-semibold'>There is no Tasks added by You !!!</h3>
                    :
                    tasks.map(task =>
                        <MyTasksRow key={task._id} task={task} setTaskInfo={setTaskInfo}/>
                    )
                }
            </div>
            {
                taskInfo &&
                <UpdateTasks taskInfo={taskInfo} setTaskInfo={setTaskInfo} refetch={refetch}/>
            }
        </div>
    );
};

export default MyTasks;