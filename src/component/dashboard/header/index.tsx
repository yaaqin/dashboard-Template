import React from 'react'
import { ChervonButton, IconWorld } from '../../../asset/icon/dashboard/header'

export default function MainHeader() {
    return (
        <div className="w-full h-[37px] px-10 py-2.5 bg-custom-primarydistributor">
            <div className="flex items-center gap-6">
                <div className="text-white text-sm font-medium">Download Apikasi MBG</div>
                <div className="text-white text-sm font-medium ms-auto">Bantuan</div>
                <div className="text-white text-sm font-medium ">Tentang MBG</div>
                <div className="text-white text-sm font-medium ">Diskon</div>
                <div className="justify-start items-center gap-2 flex">
                    <div className="text-white text-sm font-medium font-inter leading-[16.80px]">Bahasa Indonesia</div>
                    {IconWorld()}
                    <div className="cursor-pointer">
                        {ChervonButton()}
                    </div>
                </div>
            </div>
        </div>
    )
}
