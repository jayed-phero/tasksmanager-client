import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CompleteRow from './CompleteRow';
import MyTasksRow from './MyTask/MyTasksRow';

const CompletedTasks = () => {

    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['postedquery'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/postedtasks`)
            .then(res => res.json())
    })
    return (
        <div className='min-h-screen py-16  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 bg-gray-100'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mx-auto max-w-7xl px-4 sm:px-6">
                {
                    tasks.length === 0 ?
                        <h3 className='text-center text-xl font-semibold'>Compelted Task is empty!!!</h3>
                        :
                        tasks.map(task =>
                            <CompleteRow key={task._id} task={task} refetch={refetch} />
                        )
                }
            </div>
        </div>
    );
};

export default CompletedTasks;