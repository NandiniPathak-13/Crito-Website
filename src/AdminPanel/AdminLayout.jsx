import React from 'react'

import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
// import {useSelector} from 'react-redux'

export default function AdminLayout() {
// const user=useSelector((state)=> state.auth.user)
    return (
        <>
            <div className="flex">
                <div><Sidebar /></div>
                

                <div className='flex-1 bg-gray-100 min-h-screen'>
                    <Outlet />
                </div>
            </div>


        </>

    )
}