import React from 'react'
import TopBar from '../Components/TopBar';
import SideBar from "../Components/SideBar";
import {AppFooter} from "../Components/Footer";

const AdminLayout = ({ children, userName }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <TopBar userName={userName}/>
            <SideBar/>
            <main>{children}</main>
            <AppFooter/>
        </div>
    );
};
export default AdminLayout;

