import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import SearchInput from './SearchInput';
import ToggleBackground from './ToogleBackground';

const TopBar = ({ userName, isDarkMode, toggleBackgroundMode }) => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <header className={`shadow-md  ${isDarkMode ? 'bg-[#273142] text-white' : 'bg-dark text-gray-900'}`}>
            <div className={`bg-dark container flex justify-between px-5 py-3 mx-auto md:px-5  ${isDarkMode ? 'bg-dark' : 'bg-white'}`}>
                <div className="text-2xl w-1/5 text-white font-semibold tracking-wide">
                    <Link href="/"
                          className="transition duration-200 ">
                        MyApp
                    </Link>
                </div>
                {/* Search Input */}

                {/* Right-side Controls */}
                <div className="flex w-4/5 items-center space-x-4">
                    <SearchInput/>
                    {/* Notification Icon */}
                    <button
                        className={`relative transition duration-200 hover:text-blue-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 17h5l-1.405-1.405C18.37 15.21 18 14.23 18 13V9a6 6 0 10-12 0v4c0 1.23-.37 2.21-.595 2.595L4 17h5m6 0a3 3 0 11-6 0"/>
                        </svg>
                    </button>

                    {/* Language Switcher */}
                    <button
                        className={`px-3 py-1 text-sm rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 ${isDarkMode ? 'bg-blue-600 text-white' : 'text-gray-900 bg-gray-200'}`}>
                        EN
                    </button>

                    {/* Profile Dropdown */}
                    <div className="relative flex items-center space-x-2">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full cursor-pointer"
                        />
                        <button onClick={toggleProfileMenu} className="flex items-center space-x-1 focus:outline-none">
                            <span className={`hidden text-sm md:inline ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {userName}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        {isProfileMenuOpen && (
                            <div
                                className={`absolute top-full mt-2 w-48 py-1 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
                                <Link href="/profile"
                                      className="block px-4 py-2 text-sm hover:bg-gray-700">Profile</Link>
                                <Link href="/settings"
                                      className="block px-4 py-2 text-sm hover:bg-gray-700">Settings</Link>
                                <button className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-700">Log Out
                                </button>
                            </div>
                        )}
                    </div>


                    {/* Toggle Background Mode */}
                    <ToggleBackground toggleBackgroundMode={toggleBackgroundMode}/>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
