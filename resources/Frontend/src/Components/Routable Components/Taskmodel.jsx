import React, { useState } from 'react';
import axios from 'axios';

function TaskModel({ closeshowmodel }) {
    const [showToast, setShowToast] = useState(false);
    const [errorToast, errorsetToast] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formdata, setFormData] = useState({
        projectname: '',
        projecttitle: '',
        description: '',
        priority: '',
        opendate: '',
        closedate: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        try {

            const response = await axios.post('http://localhost:8000/api/.....', formdata)
            console.log('Task created successfully:', response.data);
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 3000);
            closeshowmodel();
        } catch (error) {
            console.error('Error creating task:', error);
            setErrorMessage(
                error.response?.data?.message || 
                error.message || 
                'Failed to create task. Please try again.'
            );
            errorsetToast(true);
            setTimeout(() => {
                errorsetToast(false);
            }, 3000)
        }
    }

    return (
        <div>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Create New Task
                            </h3>
                            <button
                                type="button"
                                onClick={closeshowmodel}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-1">
                                <div className="col-span-2">
                                    <label
                                        htmlFor="name"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Project Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formdata.projectname}
                                        onChange={handleChange}
                                        id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Project name"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Task Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formdata.projecttitle}
                                        onChange={handleChange}
                                        id="title"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Project title"
                                        required
                                    />
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="description"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Task Description
                                    </label>
                                    <textarea
                                        id="description"
                                        value={formdata.description}
                                        onChange={handleChange}
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Write product description here"
                                    ></textarea>
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="priority"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Priority
                                    </label>
                                    <select
                                        name="priority"
                                        id="priority"
                                        value={formdata.priority}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    >
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Open Date
                                    </label>
                                    <input
                                        type="date"
                                        value={formdata.opendate}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        Closing Date
                                    </label>
                                    <input
                                        type="date"
                                        value={formdata.closedate}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                <svg
                                    className="me-1 -ms-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Add new task
                            </button>
                            {showToast && (
                                <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 mt-10" role="alert">
                                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <span className="sr-only">Info</span>
                                    <div>
                                        <span className="font-medium">Success alert!</span> New Task Added.
                                    </div>
                                </div>
                            )}
                            {errorToast && (
                                <div id="toast-danger" class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800" role="alert">
                                    <div class="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                                        </svg>
                                        <span class="sr-only">Error icon</span>
                                    </div>
                                    <div class="ms-3 text-sm font-normal">{errorMessage}</div>
                                    <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
                                        <span class="sr-only">Close</span>
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                    </button>
                                </div>
                            )}

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TaskModel;