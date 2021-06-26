import React from 'react';
import { useRouter } from 'next/router';

import { useQuery } from '@apollo/client';
import { OBTENER_USUARIO } from '../config/gql';

const Header = () => {

    const router = useRouter();

    const { data, loading, error } = useQuery(OBTENER_USUARIO);

    // Si no hay informacion

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        router.push('/login');
    }

    return (
        <>
            {
                (!loading && data.obtenerUsuario) ?
                <div className="flex justify-between mb-6">
                    <p className="mr-2">Hola { data.obtenerUsuario.nombre } 👋 </p>

                    <button
                        onClick={ () => cerrarSesion() }
                        type="button"
                        className="bg-blue-800 w-full sm:w-auto font-bold text-white rounded py-3 px-5 text-xs uppercase shadow-md hover:bg-gray-800"
                    >
                        Cerrar Sesión
                    </button>
                </div> : null
            }
        </>
    )
}

export default Header;