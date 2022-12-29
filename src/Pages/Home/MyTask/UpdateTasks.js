import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { uploadImage } from '../../../api/uploadImage';
import SmallSpinner from '../../../Shared/SmallSpinner';
import SpinnerSmall from '../../../Shared/SpinnerSmall';

const UpdateTasks = ({ taskInfo, refetch, setTaskInfo }) => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const details = form.details.value
        const image = form.image.files[0]

        setLoading(true)
        uploadImage(image)
            .then(imgLink => {
                console.log(imgLink)
                const updatedTaskData = {
                    title,
                    details,
                    image: imgLink
                }
                axios.put(`${process.env.REACT_APP_API_URL}/updatetask/${taskInfo._id}`, updatedTaskData)
                    .then(res => {
                        console.log(res)
                        toast.success("Task Info Updated Successfully")
                        setLoading(false)
                        refetch()
                        setTaskInfo(null)
                        navigate('/mytasks')
                        
                    })
                    .catch(err => {
                        console.log(err)
                        toast.error("Please Fil up al of the field must be provide an image")
                    })
            })
    }
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="px-6   py-2.5 bg-blue-600 text-white  font-medium text-xsleading-tight uppercase  rounded  shadow-md hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <form action="" onSubmit={handleSubmit}>
                <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog relative w-auto pointer-events-none">
                        <div
                            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div
                                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Update Your TaskInfo</h5>
                                <button type="button"
                                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body relative p-4">
                                <div className=" font-normal block bg-white flex flex-col">
                                    <div action="">
                                        <div className="flex flex-col">
                                            <input name='title' type="text" className='outline-none  py-3 px-3 border-2 border-gray-300 bg-gray-100 rounded-lg' placeholder='Title' defaultValue={taskInfo?.title} required/>

                                            <input name='details' type="text" className='outline-none border-2 border-gray-300 py-3 px-3 mt-2 bg-gray-100 rounded-lg' placeholder='Detils' defaultValue={taskInfo?.details} required/>
                                        </div>
                                        <div className='flex items-center gap-5 mt-2'>
                                            <label
                                                htmlFor='image'
                                                className='p-1 text-center rounded-md cursor-pointer text-gray-500 font-bold'
                                            >
                                                <i class="fa-regular fa-images text-xl mr-3"></i>Click for Update Image
                                                <input
                                                    type='file'
                                                    name='image'
                                                    id='image'
                                                    accept='image/*'
                                                    required
                                                    hidden
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                <button type="button" class="px-6  py-2.5 bg-purple-600 text-white font-medium text-xs  leading-tight  uppercase  rounded  shadow-md  hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0   active:bg-purple-800 active:shadow-lg  transition duration-150  ease-in-out" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="w-32 py-2.5 bg-blue-600 text-white  font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                                    {
                                        loading ? 
                                        <SmallSpinner/>
                                        :
                                        "Save changes"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateTasks;