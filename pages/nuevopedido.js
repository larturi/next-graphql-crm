import React, { useContext } from 'react';

import Layout from '../components/Layout';
import AsignarCliente from '../components/pedidos/AsignarCliente';
import AsignarProductos from '../components/pedidos/AsignarProductos';
import ResumenPedido from '../components/pedidos/ResumenPedido';
import Total from '../components/pedidos/Total';

// Context de Pedidos
import PedidoContext from '../context/pedidos/PedidoContext';

const NuevoPedido = () => {

    // Utilizar Context y extraer sus valores y funciones
    const pedidoContext = useContext(PedidoContext);

    return (
        <Layout>

            <h1 className="text-2xl text-gray-800 font-light">Nuevo Pedido</h1>

            <div className="flex justify-center mt-5">
                <div className="w-full max-w-lg">
                    <AsignarCliente />
                    <AsignarProductos />
                    <ResumenPedido />
                    <Total />

                    <button
                        type="button"
                        className={` bg-gray-800 w-full mt-5 p-2 uppercase text-white font-bold hover:bg-gray-900`}
                    >
                        Registrar Pedido
                    </button>
                </div>
            </div>

        </Layout>
    )
};

export default NuevoPedido;
