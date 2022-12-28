import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import MyTasksRow from './MyTasksRow';

const MyTasks = () => {
    const { data: tasks = [], isLoading } = useQuery({
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
                        <MyTasksRow key={task._id} task={task}/>
                    )
                }
            </div>
        </div>
    );
};

export default MyTasks;