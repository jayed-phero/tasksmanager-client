import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyTasksRow = ({ task , setTaskInfo}) => {
    const { title, details, image } = task
    const [show, setShow] = useState(false)
    const { user } = useContext(AuthContext)
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
                                    <li>
                                        <a
                                            class=" dropdown-item   text-sm  py-2  px-4 font-normal  block w-full  whitespace-nowrap  text-gray-700 hover:bg-gray-100   "
                                            href="#"
                                        >Delete file</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 onClick={() => setShow(!show)} className='text-blue-500 mt-5 text-sm cursor-pointer'>See details</h3>
                <div className={`mt-5 ${show ? "block" : "hidden"}`}>
                    <h3 className="text-sm font-medium">{details}</h3>
                    <img src={image} className='h-20 w-32 rounded-lg shadow-xl mt-3' alt="" />
                    <div className=" font-normal block w-full bg-white flex flex-col">
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
            </div>
        </div>
    );
};

export default MyTasksRow;