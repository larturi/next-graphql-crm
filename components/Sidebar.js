import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {

    const router = useRouter();

    return (
        <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
            <div>
                <p className="text-white text-2xl font-black">CRM Clientes</p>
            </div>

            <nav className="mt-6 list-none">
                <li className={router.pathname === '/' ? "bg-indigo-600 p-2" : "p-2"}>
                    <Link href="/">
                        <a className="text-white mb-2 mt-2 block">Clientes</a>
                    </Link>
                </li>
                <li className={router.pathname === '/pedidos' ? "bg-indigo-600 p-2" : "p-2"}>
                    <Link href="/pedidos">
                        <a className="text-white mb-2 mt-2 block">Pedidos</a>
                    </Link>
                </li>
                <li className={router.pathname === '/productos' ? "bg-indigo-600 p-2" : "p-2"}>
                    <Link href="/productos">
                        <a className="text-white mb-2 mt-2 block">Productos</a>
                    </Link>
                </li>
            </nav>
        </aside>
    )
}

export default Sidebar;