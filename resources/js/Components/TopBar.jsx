import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const TopBar = ({userName}) => {
    return (
        <header className="text-white bg-blue-600 shadow">
            <div className="container flex items-center justify-between px-4 py-2 mx-auto">
                {/* Brand Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/" className="hover:text-gray-200">MyApp</Link>
                </div>

                {/* Navigation Links */}
                

                {/* User Profile */}
                <div className="flex items-center space-x-4">
                    <div className="hidden md:block">
                        <span className="text-sm">Hello, {userName}</span>
                        <span></span>
                    </div>
                    <button className="px-4 py-2 text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Log Out
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default TopBar;
