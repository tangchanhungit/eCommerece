import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import SearchInput from './SearchInput';
import ToggleBackground from './ToogleBackground';

const TopBar = ({ userName, isDarkMode}) => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <header className={`text-white shadow-md bg -[#273142]" ${isDarkMode ? 'bg-[#273142]' : 'bg-white'}`}>
            <div className={`container flex items-center justify-between px-6 py-3 mx-auto md:px-10 ${isDarkMode ? 'bg-[#273142]' : 'bg-white'}`}>
                
                {/* Brand Logo */}
                <div className="text-2xl font-semibold tracking-wide">
                    <Link href="/" className={`transition duration-200 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        MyApp
                    </Link>
                </div>
                
                {/* Search Input */}
                <SearchInput />

                {/* Right-side Controls */}
                <div className="flex items-center space-x-4">
                    {/* Notification Icon */}
                    <button className="relative text-white transition duration-200 hover:text-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405C18.37 15.21 18 14.23 18 13V9a6 6 0 10-12 0v4c0 1.23-.37 2.21-.595 2.595L4 17h5m6 0a3 3 0 11-6 0" />
                        </svg>
                    </button>

                    {/* Language Switcher */}
                    <button className="px-3 py-1 text-sm text-white rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        EN
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative flex items-center space-x-2">
                        <img 
                            src="https://via.placeholder.com/40" 
                            alt="User Avatar" 
                            className="w-10 h-10 rounded-full"
                        />
                        <button onClick={toggleProfileMenu} className="flex items-center space-x-1 focus:outline-none">
                            <span className="hidden text-sm md:inline">{userName}</span>
                        </button>
                        {isProfileMenuOpen && (
                            <div className="absolute right-0 w-48 py-1 mt-2 bg-white rounded-lg shadow-lg">
                                <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                                <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                                <button className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100">Log Out</button>
                            </div>
                        )}
                    </div>

                    <ToggleBackground/>
                </div>

            </div>
        </header>
    );
};

export default TopBar;
