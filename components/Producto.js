import React from 'react';
import Swal from 'sweetalert2';

import Router from 'next/router';
import { useMutation } from '@apollo/client';
import { ELIMINAR_PRODUCTO, OBTENER_PRODUCTOS } from '../config/gql';

const Producto = ({producto}) => {

    const [ eliminarProducto ] = useMutation(ELIMINAR_PRODUCTO, {
        update(cache) {
            const { obtenerProductos } = cache.readQuery({
                query: OBTENER_PRODUCTOS,
                variables: {
                    eliminado: false
                }
            });

            cache.writeQuery({
                query: OBTENER_PRODUCTOS,
                variables: {
                    eliminado: false
                },
                data: {
                    obtenerProductos: obtenerProductos.filter( producto => producto.id !== id )
                }
            });
        }
    });

    const { id, nombre, stock, precio } = producto;

    const confirmarEliminarProducto = () => {
        Swal.fire({
            title: 'Deseas eliminar este producto?',
            text: "Esta accion no se puede deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar'
          }).then( async (result) => {
            if (result.isConfirmed) {
                
                try {
                    const { data } = await eliminarProducto({
                        variables: {
                            id
                        }
                    });

                    Swal.fire(
                        'Producto eliminado',
                        'El producto ha sido eliminado correctamente',
                        'success'
                    );
                    
                } catch (error) {
                    console.error(error);    
                }

            }
        });
    };

    const editarProducto = () => {
        Router.push({
            pathname: "/editarproducto/[id]",
            query: { id }
        })
    }

    return (
        <tr>
            <td className="border px-4 py-2">{ nombre }</td>
            <td className="border px-4 py-2">{ stock }</td>
            <td className="border px-4 py-2">${ precio }</td>
            <td className="border px-4 py-2">
                <button
                    type="button"
                    className="flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
                    onClick={ () => confirmarEliminarProducto() }
               >
                    Eliminar
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>    
            </td>

            <td className="border px-4 py-2">
                <button
                    type="button"
                    className="flex justify-center items-center bg-indigo-600 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
                    onClick={ () => editarProducto() }
               >
                    Editar
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </button>    
            </td>
        </tr>
    )
};

export default Producto;
