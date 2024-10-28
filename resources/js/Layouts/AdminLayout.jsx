import React from 'react'
import TopBar from '../Components/TopBar';

const AdminLayout = ({ children, userName }) => {
    return (
        <div>
            <TopBar userName={userName}/>
            <main>{children}</main>
        </div>
    );
};
export default AdminLayout;

