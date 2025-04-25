import React, { useEffect, useState } from 'react'
import { FiCheckSquare, FiCalendar, FiUsers, } from 'react-icons/fi';
import TaskModel from './Taskmodel';
import axios, { Axios } from 'axios';
function Statics() {
    const [showmodel, SetShowModel] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [taskcount, setTaskCount] = useState(0);
    const handleshowmodel = () => {
        SetShowModel(!showmodel);
    }
    const closeshowmodel = () => {
        SetShowModel(false);
    }
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/tasks/gettask');
                setTasks(response.data.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    useEffect(() => {
        const fetchCount = async () => {

            try {

                const response = await axios.get('http://localhost:8000/api/tasks/count');
                setTaskCount(response.data.count)
            } catch (error) {
                console.error('Error fetching task count:', error);
            }
        }
        fetchCount();
    }, [])

    return (
        <>
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">My Dashboard</h2>
                <button onClick={handleshowmodel} className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    + New Task
                </button>
            </div>
            {showmodel && (<TaskModel closeshowmodel={closeshowmodel} />)}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                                <FiCheckSquare className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dt className="text-sm font-medium text-gray-500 truncate">Total Tasks</dt>
                                <dd className="flex items-baseline">
                                    <div className="text-2xl font-semibold text-gray-900">{taskcount}</div>
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                                <FiCheckSquare className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dt className="text-sm font-medium text-gray-500 truncate">Completed</dt>
                                <dd className="flex items-baseline">
                                    <div className="text-2xl font-semibold text-gray-900">12</div>
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                                <FiCalendar className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dt className="text-sm font-medium text-gray-500 truncate">Due Today</dt>
                                <dd className="flex items-baseline">
                                    <div className="text-2xl font-semibold text-gray-900">3</div>
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                                <FiUsers className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dt className="text-sm font-medium text-gray-500 truncate">Team Tasks</dt>
                                <dd className="flex items-baseline">
                                    <div className="text-2xl font-semibold text-gray-900">5</div>
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Tasks</h3>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {tasks.map((task) => (
                                <div key={task.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50" >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                            />
                                          
                                            <p className="ml-3 text-sm font-medium text-gray-900">{task.project_name}</p>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                         
                                        <span>{new Date(task.open_date).toLocaleDateString('en-US')}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                          

                        </div>
                    </div>
                </div>

                <div>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Activity Feed</h3>
                        </div>
                        <div className="divide-y divide-gray-200">

                            <div className="px-4 py-4 sm:px-6">
                                <div className="flex space-x-3">
                                    <div className="flex-shrink-0">
                                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
                                            DL
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm text-gray-800">
                                            <span className="font-medium text-gray-900">You</span> completed "Design wireframes"
                                        </p>
                                        <p className="text-sm text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statics