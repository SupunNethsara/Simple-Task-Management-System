import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FiHome, FiCheckSquare, FiSettings,  FiBell, FiSearch } from 'react-icons/fi';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50">

            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <FiSearch className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search tasks, projects..."
                            className="border-0 focus:ring-0 text-gray-600 placeholder-gray-400"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                            <FiBell className="h-6 w-6" />
                        </button>
                        <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                            DL
                        </div>
                    </div>
                </div>
            </header>


            <div className="flex">

                <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
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


                <div className="md:pl-64 flex flex-col flex-1">
                    <main className="flex-1">
                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

                             <Outlet/>


                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}