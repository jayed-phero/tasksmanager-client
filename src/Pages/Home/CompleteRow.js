import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CompleteRow = ({ task }) => {
    const { title, details, image } = task
    const [show, setShow] = useState(false)

    return (
        <div className='max-w-xs border border-blue-500  rounded-lg bg-white py-3 px-4'>
            <div className=''>
                <h3 className='text-lg'>{title}</h3>
                <p className='font-semibold py-2'>{details}</p>
                {/* <div class="flex justify-center">
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
                                <li>
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
                                <li >
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
                </div> */}
            </div>
            <h3 onClick={() => setShow(!show)} className='text-blue-500 mt-5 text-sm cursor-pointer'>See details</h3>
            <div className=''>
                <div className=" font-normal block w-full bg-white flex items-end justify-between gap-5">
                    <img src={image} className='h-20 w-32 rounded-lg shadow-xl mt-3' alt="" />
                    <Link to='/mytasks'><button className='border bg-blue-500 w-24 py-1 text-xs rounded text-white' type='submit' >
                        InComplete
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default CompleteRow;