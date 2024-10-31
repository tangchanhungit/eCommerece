import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function ToggleBackground() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleBackgroundColor = (checked) => {
        setIsDarkMode(checked);
        document.body.classList.toggle('bg-dark', checked); // Use a CSS class for better control
        document.body.classList.toggle('bg-light', !checked);
    };

    return (
        <div className="flex items-center justify-center">
            <Switch
                checked={isDarkMode}
                onChange={toggleBackgroundColor}
                className={`${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'}
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out`}
            >
        <span
            className={`${
                isDarkMode ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
        />
            </Switch>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
        </div>
    );
}
