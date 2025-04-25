import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2, FiCheckCircle, FiClock } from 'react-icons/fi';
import axios from 'axios';

function MyTask() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const markAsCompleted = async (taskId) => {
    try {
     const response = await axios.put(`http://localhost:8000/api/tasks/${taskId}/complete`);
      console.log(response.data);
      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskId ? { ...task, status: 'Completed' } : task
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deletetask = async(taskId)=>{
    try{
      const response =await axios.delete(`http://localhost:8000/api/tasks/${taskId}/delete`);
      console.log(response.data);
  

    }catch(error){
      console.error('Error deleting task:', error);
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    return status === 'completed' 
      ? <FiCheckCircle className="text-green-500" /> 
      : <FiClock className="text-yellow-500" />;
  };

  return (
    <div className="p-6">
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">My Task Dashboard</h2>
       
      </div>

      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div 
              key={task.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{task.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{task.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    {getStatusIcon(task.status)}
                    <span className="ml-2">{task.status}</span>
                  </div>
                  <span>{new Date(task.open_date).toLocaleDateString()}</span>
                </div>

                <div className="flex justify-between border-t pt-4">
                  <button className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <FiEdit className="mr-1" /> Edit
                  </button>
                  <button onClick={()=> deletetask(task.id)} className="text-red-600 hover:text-red-800 flex items-center">
                    <FiTrash2 className="mr-1" /> Delete
                  </button>
                  <button  onClick={() => markAsCompleted(task.id)} style={{borderRadius:'5px'}} className="text-white font-medium hover:bg-green-800 cursor-pointer bg-green-600  flex items-center p-1">
                     Completed
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && tasks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No tasks found. Create your first task!</p>
        </div>
      )}
    </div>
  );
}

export default MyTask;