import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import { IconCar, IconChart, iconDriver, IconFeedback, iconHome, IconHome, IconLocation, IconReciev, IconWallet, MBGIconOrange } from '../../../asset/icon/dashboard/sideBar';

export default function MainSideBar() {
    const menuItems = useMemo(
        () => [
            { id: 'dashboard', icon: IconHome, label: 'Dashboard', link: '/distributor/dashboard' },
            { id: 'pesananProduk', icon: IconReciev, label: 'Pesanan Produk', link: '/distributor/pesanan-produk' },
            {
                id: 'prosesPengiriman',
                icon: IconLocation,
                label: 'Proses Pengiriman',
                link: '/distributor/proses-pengiriman',
            },
            {
                id: 'kendaraanDriver',
                icon: IconCar,
                label: 'Kendaraan & Driver',
                link: '/distributor/kendaraan-driver',
            },
            {
                id: 'manajemenKendaraan',
                icon: iconHome,
                label: 'Manajemen Kendaraan',
                link: '/distributor/manajemen-kendaraan',
            },
            {
                id: 'manajemenPengemudi',
                icon: iconDriver,
                label: 'Manajemen Pengemudi',
                link: '/distributor/manajemen-pengemudi',
            },
            { id: 'analaisis', icon: IconChart, label: 'Analisis', link: '/distributor/analisis' },
            { id: 'keuangan', icon: IconWallet, label: 'Keuangan', link: '/distributor/keuangan' },
            { id: 'rantingUlasan', icon: IconFeedback, label: 'Ranting & Ulasan', link: '/distributor/ranting-ulasan' },
        ],
        [],
    );
    const activeItemId = false
    const dataDistributor = false
    const getIconColor = (id: string) => (activeItemId ? '#5F5D9C' : '#B0B3C9');
    const getTextColor = (id: string) => activeItemId  ? '#5F5D9C font-medium' : 'text-[#B0B3C9]';
    const getBgColor = (id: string) => (activeItemId ? 'bg-[#E7E7F0] w-[225px]' : '');

    return (
        <>
            <div>
                <aside className="pt-[53px] rounded-[8px] p-[24px]">
                    <div className="cursor-pointer mb-5 pl-[16px] font-bold font-inter text-[20px] w-[120px] lg:w-[200px]">
                        <h2>
                            <MBGIconOrange />
                        </h2>
                    </div>
                    {menuItems
                        .filter((item) => {
                            // if (isCompany) {
                            //     return !['kendaraanDriver'].includes(item.id);
                            // }
                            // if (isIndividual) {
                            //     return !['manajemenKendaraan', 'manajemenPengemudi'].includes(item.id);
                            // }
                            return true;
                        })
                        .map((item) => (
                            <Link to={item.link} key={item.id}>
                                <button
                                    className={`flex gap-[10px] px-[16px] py-[12px] rounded-lg cursor-pointer ${getBgColor(item.id)} ${dataDistributor ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    // disabled={dataDistributor?.userId?.isDetailVerified === false}
                                >
                                    <div>{item.icon(getIconColor(item.id))}</div>
                                    <p className={`font-inter text-[14px] ${getTextColor(item.id)}`}>{item.label}</p>
                                </button>
                            </Link>
                        ))}
                </aside>
            </div>
        </>
    )
}
