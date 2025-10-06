import React, { useState } from 'react'

import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
// import {useSelector} from 'react-redux'

export default function AdminLayout() {
// const user=useSelector((state)=> state.auth.user)
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <div className="flex">
                <div><Sidebar /></div>
                

                <div className={`flex-1 transition-all duration-300 ${isOpen ? "ml-64" : "ml-20"} p-4`}>
                    <Outlet />
                </div>
            </div>


        </>

    )
}