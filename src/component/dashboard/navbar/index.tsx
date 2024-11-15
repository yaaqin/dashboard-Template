import React from 'react'
import { IconDompet, IconDropdownDis, IconLogoutDis, IconMessageDis, IconNotifDis } from '../../../asset/icon/dashboard/navbar'
import { Link } from 'react-router-dom'

export default function NavbarMainDashboard() {
    const openCategoryId = false
  return (
    <div className="w-full h-2">
            <div className="px-2 bg-white py-4 shadow-md">
                <div className="flex mx-5 items-center">
                    <div className=" pl-[282px] capitalize font-medium">
                        Cikarang
                        {/* {location.pathname.split('/')[2]?.replace(/-/g, ' ')} */}
                    </div>
                    <div className="ms-auto  flex items-center">
                        <div className="flex gap-4 mr-8">
                            <IconDompet />{' '}
                            <span className="text-gray-500">
                                Saldo Rp 5000
                                {/* Saldo Rp {FormatNumber(dataDistributor?.userId?.saldo)} */}
                            </span>
                        </div>
                        <div className="flex gap-5">
                            <IconMessageDis /> <IconNotifDis />
                        </div>

                        <hr className="h-[23px] bg-slate-400 w-[2px] mx-4" />
                        <div>
                            <button 
                            // onClick={handleToggleCategory} 
                            className="flex mx-auto items-center gap-2 ">
                                <div className="w-[32px] h-[32px]">
                                    <img
                                        // src={dataDistributor?.imageProfile}
                                        alt=""
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div>Yaaqin</div>
                                {/* <div>{dataDistributor?.nama_distributor}</div> */}
                                <div>
                                    <IconDropdownDis />
                                </div>
                            </button>
                        </div>
                        {openCategoryId && (
                            <div className="font-inter bg-white p-[4px] right-10 absolute mt-40 border rounded-lg">
                                <div className="flex flex-col  gap-2 px-[8px] py-[4px]">
                                    <Link to={'/distributor/profile/home'} className="mb-2 flex gap-2">
                                        <img
                                            // src={dataDistributor?.imageProfile}
                                            alt=""
                                            className="w-[24px] h-[24px] rounded-full object-cover"
                                        />
                                        Profile
                                    </Link>
                                    <hr className="mb-2" />
                                    <button 
                                    // onClick={handleLogout} 
                                    className="font-normal flex gap-2">
                                        <IconLogoutDis />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
  )
}
