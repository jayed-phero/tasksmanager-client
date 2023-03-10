import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { uploadImage } from '../../api/uploadImage';
import SmallSpinner from '../../Shared/SmallSpinner';
import { AuthContext } from '../../context/AuthProvider'


const AddTasks = () => {
    const [loading, setLoading] = useState(false)
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const details = form.details.value
        const image = form.image.files[0]
        console.log(image)

        setLoading(true)
        uploadImage(image)
            .then(imgLink => {
                console.log(imgLink)
                const taskData = {
                    title,
                    details,
                    image: imgLink,
                    name: user?.displayName,
                    email: user?.email,
                    role: "Incomplete"
                }

                console.log(taskData)
                axios.post(`${process.env.REACT_APP_API_URL}/tasks`, taskData)
                    .then(res => {
                        console.log(res)
                        setLoading(false)
                        form.reset()
                        toast.success("Successfully added task")
                        navigate('/mytasks')
                    })
                    .catch(err => {
                        console.log(err)
                        toast.error("Please provide all data and Check your Internet Connection")
                        setLoading(false)
                    })
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })


        console.log(title)
    }
    return (
        <div className=' dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 bg-gray-100'>
            <div className='min-h-screen py-11 mx-auto max-w-7xl px-6 flex flex-col items-center '>
                <h3 className='text-center w-2/3 text-gray-700 dark:text-gray-300'>Type Your Important Task Here. Its very easy.</h3>
                <div className='w-full lg:w-96 mt-5 border rounded-lg bg-white py-3 px-4  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 '>
                    <h3 className="text-sm font-medium text-blue-500">Add a tasks</h3>
                    <div className=" font-normal block bg-white dark:bg-gray-800 flex flex-col">
                        <form onSubmit={handleSubmit} action="">
                            <div className="flex flex-col">
                                <input name='title' type="text" className='outline-none  py-2 px-3 border-b border-gray-300  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 ' placeholder='Title' />
                                <input name='details' type="text" className='outline-none border-b border-gray-300 py-2 px-3 text-xs  dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 ' placeholder='Detils' />
                            </div>
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
                                        required
                                    />
                                </label>
                                <button className=' bg-blue-500 w-16 py-1 text-xs rounded text-white' type='submit' >
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

export default AddTasks;