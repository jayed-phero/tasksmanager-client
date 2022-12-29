import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { completeTask } from '../../../api/complete';
import { AuthContext } from '../../../context/AuthProvider';
import ConformationModal from '../../../Shared/ConformationModal';
import SmallSpinner from '../../../Shared/SmallSpinner';

const MyTasksRow = ({ task, setTaskInfo, refetch }) => {
    const { title, details, image } = task
    const [show, setShow] = useState(false)
    const { user } = useContext(AuthContext)
    const [close, setClose] = useState(null)
    const [loading, setLoading] = useState(false)
    const [deleteTask, setDeleteTask] = useState(null)



    const makeComplete = task => {
        completeTask(task)
            .then(data => {
                console.log(data)
                refetch()
            })
        setLoading(true)

        // axios.put(`${process.env.REACT_APP_API_URL}/completetask/${task?.role}`, task)
        //     .then(res => {
        //         console.log(res)
        //         setLoading(false)
        //     })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    const modalClose = () => {
        setDeleteTask(null)
    }

    const handleDeleteTasks = product => {
        setLoading(true)
        axios.delete(`${process.env.REACT_APP_API_URL}/alltask/${task?._id}`)
            .then(res => {
                console.log(res)
                if (res.data.deletedCount > 0) {
                    toast.success(`Tasks ${product.name} deleted successfully`)
                    setLoading(false)
                    refetch()
                }
            })
            .catch(err => {
                console.log(err)
                toast.error("Please check your Internet connection...")
                setLoading(false)
            })

    }
    return (
        <div>
            <div className='max-w-xs border  rounded-lg bg-white py-3 px-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-lg'>{title}</h3>

                    <div class="flex justify-center">
                        <div>
                            <div class="dropstart relative">
                                <button
                                    class="  dropdown-toggle text-xs transition duration-150 ease-in-out  flex items-center  whitespace-nowrap  "
                                    type="button"
                                    id="dropdownMenuButton1s"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <Link><i class="fa-solid fa-ellipsis text-2xl font-semibold"></i></Link>
                                </button>
                                <ul
                                    class=" px-3  dropdown-menu min-w-max  hidden bg-white text-base z-50  float-left py-2 list-none text-left   rounded-lg shadow-lg mt-1 hidden  m-0 bg-clip-padding border-none  "
                                    aria-labelledby="dropdownMenuButton1s"
                                >
                                    <li onClick={() => setTaskInfo(task)}>
                                        <a
                                            class=" dropdown-item   text-sm  py-2  px-4 font-normal  block w-full  whitespace-nowrap  text-gray-700 hover:bg-gray-100   "
                                            href="#"
                                        >
                                            <button type="button" class=" transition duration-150ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                                Update Task
                                            </button>
                                        </a
                                        >
                                    </li>
                                    <li onClick={() => setDeleteTask(task)}>
                                        <a
                                            class=" dropdown-item   text-sm  py-2  px-4 font-normal  block w-full  whitespace-nowrap  text-gray-700 hover:bg-gray-100   "
                                            href="#"
                                        >
                                            <button type="button" class=" transition duration-150ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal2" >
                                                Delete task
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 onClick={() => setShow(!show)} className='text-blue-500 mt-5 text-sm cursor-pointer'>See details</h3>
                <div className={`mt-5 ${show ? "block" : "hidden"}`}>
                    <h3 className="text-sm font-medium">{details}</h3>

                    <div className=" font-normal block w-full bg-white flex items-end justify-between gap-5">
                        <img src={image} className='h-20 w-32 rounded-lg shadow-xl mt-3' alt="" />
                       <Link to='/completedtasks'><button className='border bg-blue-500 w-24 py-1 text-xs rounded text-white' type='submit' >
                           Complete
                        </button></Link> 
                        {/* <form onSubmit={handleSubmit} action="">
                            <input name='title' type="text" className='outline-none  py-2 px-3 border-b border-gray-300' placeholder='Title' />
                            <input name='details' type="text" className='outline-none border-b border-gray-300 py-2 px-3 text-xs' placeholder='Detils' />
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
                        </form> */}
                    </div>
                </div>
                {
                    <ConformationModal handleDeleteTasks={handleDeleteTasks} setLoading={setLoading} loading={loading} modalClose={modalClose} />
                }
            </div>
        </div>
    );
};

export default MyTasksRow;