import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FiX, FiCheck, FiCalendar, FiFlag } from 'react-icons/fi';

const EditTaskModal = ({ isOpen, onClose, taskData }) => {
    const [editData, setEditData] = useState({
        projectname: '',
        projecttitle: '',
        description: '',
        priority: '',
        opendate: '',
        closedate: ''
    });


    useEffect(() => {
        if (taskData) {
            setEditData({
                projectname: taskData.project_name || '',
                projecttitle: taskData.title || '',
                description: taskData.description || '',
                priority: taskData.priority || 'Medium',
                opendate: taskData.open_date ? taskData.open_date.split(' ')[0] : '',
                closedate: taskData.close_date ? taskData.close_date.split(' ')[0] : ''
            });
        }
    }, [taskData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(
                `http://localhost:8000/api/tasks/${taskData.id}`,
                {
                    projectname: editData.projectname,
                    projecttitle: editData.projecttitle,
                    description: editData.description,
                    priority: editData.priority,
                    opendate: editData.opendate,
                    closedate: editData.closedate
                }
            );
            console.log(response.data);
            alert('Task updated successfully!');
            onClose(true);
        } catch (error) {
            console.error('Error updating task:', error);
            alert(error.response?.data?.message || 'Failed to update task.');
        }
    };

    if (!isOpen) return null;

    return (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="w-full max-w-md mx-4 bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all">
                
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">Edit Task</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500 transition-colors">
                        <FiX className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Project Name</label>
                        <input
                            value={editData.projectname}
                            onChange={handleChange}
                            type="text"
                            name='projectname'
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Project name"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Task Title</label>
                        <input
                            value={editData.projecttitle}
                            onChange={handleChange}
                            type="text"
                            name='projecttitle'
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Task title"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            rows={3}
                            name='description'
                            onChange={handleChange}
                            value={editData.description}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Add detailed description..."
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <FiFlag className="mr-1.5 h-4 w-4 text-gray-400" />
                                Priority
                            </label>
                            <select
                                onChange={handleChange}
                                value={editData.priority}
                                name='priority'
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <FiCalendar className="mr-1.5 h-4 w-4 text-gray-400" />
                                Open Date
                            </label>
                            <input
                                value={editData.opendate}
                                name='opendate'
                                onChange={handleChange}
                                type="date"
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div className="space-y-1 col-span-2">
                            <label className="flex items-center text-sm font-medium text-gray-700">
                                <FiCalendar className="mr-1.5 h-4 w-4 text-gray-400" />
                                Close Date
                            </label>
                            <input
                                value={editData.closedate}
                                name='closedate'
                                onChange={handleChange}
                                type="date"
                                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end space-x-3">
                    <button
                        onClick={() => onClose(false)}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center"
                    >
                        <FiCheck className="mr-1.5 h-4 w-4" />
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTaskModal;