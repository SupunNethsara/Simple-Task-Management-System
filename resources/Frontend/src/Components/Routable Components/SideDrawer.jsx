import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiCheckSquare, FiSettings, FiBell, FiSearch } from 'react-icons/fi';
export default function SideDrawer({ onClose, show }) {
    return (
        <div
            id="drawer-example"
            className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 shadow-xl ${show ? "translate-x-0" : "-translate-x-full"
                }`}
            tabIndex="-1"
        >
           
            <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
            >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close menu</span>
            </button>


               <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white p-4">
           
                                   <div className="mb-8 mt-4 px-2">
                                       <h1 className="text-xl font-bold text-indigo-600">TaskFlow</h1>
                                   </div>
           
           
                                   <nav className="space-y-1">
                                       <Link
                                           to="/"
                                           className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-indigo-700 bg-indigo-50"
                                       >
                                           <FiHome className="mr-3 h-5 w-5" />
                                           Dashboard
                                       </Link>
                                       <Link
                                           to="tasklist"
                                           className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                                       >
                                           <FiCheckSquare className="mr-3 h-5 w-5" />
                                           My Tasks
                                       </Link>
           
           
           
                                   </nav>
           
           
                                   <div className="mt-8 pt-4 border-t border-gray-200">
                                       <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                           Workspace
                                       </h3>
                                       <nav className="mt-2 space-y-1">
                                           <Link
                                               to="/settings"
                                               className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                                           >
                                               <FiSettings className="mr-3 h-5 w-5" />
                                               Settings
                                           </Link>
                                       </nav>
                                   </div>
           
           
           
                               </div>
        </div>
    )
}