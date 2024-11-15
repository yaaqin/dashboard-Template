import React from 'react'
import { Outlet } from 'react-router-dom'
import MainHeader from '../../component/dashboard/header'
import MainSideBar from '../../component/dashboard/sideBar'
import NavbarMainDashboard from '../../component/dashboard/navbar'

export default function MainDashboard() {
  return (
    <div className="mx-auto">
    <div className="flex">
        <div className="z-40 fixed w-full">
            <MainHeader />
        </div>
        <div className="fixed z-30 bg-white h-full w-[280px] border border-[#EAEBED]">
            <MainSideBar />
        </div>
        <div className="z-20 mt-[38px] fixed w-full">
            <NavbarMainDashboard />
        </div>
        <div className="mt-[100px] pl-[282px] w-full">
            <div className="max-w-[1440px] bg-white mx-auto p-[32px]">
                <Outlet />
            </div>
        </div>
    </div>
</div>
  )
}
