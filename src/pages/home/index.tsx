import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

export default function Home() {
    const cookies = new Cookies();
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');

    // useEffect(() => {
    //     // Ambil nilai dari cookies
    //     const user = cookies.get('username');
    //     const token = cookies.get('jwt');

    //     if (!user && !token) {
    //         window.location.href = 'http://localhost:200'
    //     } else {
    //         // Set nilai ke state
    //         setUsername(user || '');
    //         setToken(token || '');
    //     }

    // }, []);
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <section>
                wlcome to homepage produsen
            </section>
            <section className='mt-4'>
                <p>your username is {username}</p>
                <p>your token is {token}</p>
            </section>
        </div>
    )
}
