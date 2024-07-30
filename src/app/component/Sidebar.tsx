// components/Sidebar.js  
import React from 'react';  
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';  

const Sidebar = () => {  
    return (  
        <div className="flex flex-col bg-[#FAFAFA] text-gray-800 h-full w-64 p-5">  
            <h1 className="text-xl font-semibold mb-4">Collection</h1>  
            <nav>  
                <ul>  
                    <li className="my-2">  
                        <a href="/home" className="flex items-center p-2 rounded hover:bg-gray-700">  
                            <FaHome className="mr-2" />  
                            Home  
                        </a>  
                    </li>  
                    <li className="my-2">  
                        <a href="/profile" className="flex items-center p-2 rounded hover:bg-gray-700">  
                            <FaUser className="mr-2" />  
                            Profile  
                        </a>  
                    </li>  
                    <li className="my-2">  
                        <a href="/settings" className="flex items-center p-2 rounded hover:bg-gray-700">  
                            <FaCog className="mr-2" />  
                            Settings  
                        </a>  
                    </li>  
                    <li className="my-2">  
                        <a href="/logout" className="flex items-center p-2 rounded hover:bg-gray-700">  
                            <FaSignOutAlt className="mr-2" />  
                            Logout  
                        </a>  
                    </li>  
                </ul>  
            </nav>  
        </div>  
    );  
};  

export default Sidebar;