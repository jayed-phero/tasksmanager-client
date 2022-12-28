import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { uploadImage } from '../../../api/uploadImage';
import SmallSpinner from '../../../Shared/SmallSpinner';

const MyTasksDetails = ({ task }) => {
    const { _id, tasksName } = task;
    const [loading, setLoading] = useState(false)

    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasksinfo'],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/tasksinfo/${_id}`)
            .then(res => res.json())
    })

    console.log(tasks)

    
    return (
        <div>
            <div className='max-w-xs border  rounded-lg bg-white py-3 px-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-lg'>{tasksName}</h3>
                    <Link><i class="fa-solid fa-ellipsis text-2xl font-semibold"></i></Link>
                </div>
                <div className='mt-2'>
                    {
                        tasks?.map((task, i) =>
                            <div className='mb-5 flex items-start gap-5'>
                                <p>{i + 1}</p>
                                <div>
                                    <h3>{task.title}</h3>
                                    <p>{task.details}</p>
                                    <p>{task.image.slice(0, 25)}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='mt-5'>
                    <h3 className="text-sm-font-medium text-blue-500">Add a tasks</h3>
                    <div className=" font-normal block w-full bg-white flex flex-col">
                        <form onSubmit={handleSubmit} action="">
                            <input name='title' type="text" className='outline-none  py-2 px-3 border-b border-gray-300' placeholder='Title' />
                            <input name='details' type="text" className='outline-none border-b border-gray-300 py-2 px-3 text-xs' placeholder='Detils'/>
                            <div className='flex items-center gap-5 mt-2'>
                                <label
                                    htmlFor='image'
                                    className='p-1 text-center rounded-md cursor-pointer text-gray-500 font-bold'
                                >
                                    <i class="fa-regular fa-images"></i>
                                    <input
                                        type='file'
                                        name='image'
                                        id='image'
                                        accept='image/*'
                                        hidden
                                    />
                                </label>
                                <button className='border bg-blue-500 w-16 py-1 text-xs rounded text-white' type='submit'>
                                    {
                                        loading ? <SmallSpinner /> : "Submit"
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTasksDetails;