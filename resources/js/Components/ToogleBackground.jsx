import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function ToggleBackground() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackgroundColor = (checked) => {
    setIsDarkMode(checked);
    document.body.style.backgroundColor = checked ? '#273142' : '#f0f0f0'; // dark/light background
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 dark:bg-[#273142]">
      <Switch
        checked={isDarkMode}
        onChange={toggleBackgroundColor}
        className={`${isDarkMode ? 'bg-[#273142]' : 'bg-gray-300'}
          relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            isDarkMode ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform bg-white rounded-full transition`}
        />
      </Switch>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
    </div>
  );
}
