import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

import Producto from '../components/Producto';
import Layout from '../components/Layout';
import { Loading } from '../components/Loading';

import { OBTENER_PRODUCTOS } from '../config/gql';

const Productos = () => {

  // Consultar los productos
  const { data, loading, error } = useQuery(OBTENER_PRODUCTOS);

  if (loading) {
    return 'Cargando...';
  } else {

    return (
      <div>
        <Layout>
          <h1 className="text-2xl text-gray-800 font-light">Productos</h1>

          <Link href="/nuevoproducto">
            <a className="bg-blue-800 py-2 px-5 mt-5 inline-block rounded text-white text-sm hover:bg-gray-800 mb-2 uppercase font-bold">
              Nuevo Producto
            </a>
          </Link>

          <table className="table-auto shadow-md mt-3 w-full w-lg">
                <thead className="bg-gray-800">
                  <tr className="text-white">
                    <th className="w-1/5 py-2">Nombre</th>
                    <th className="w-1/5 py-2">Stock</th>
                    <th className="w-1/5 py-2">Precio</th>
                    <th className="w-1/5 py-2">Eliminar</th>
                    <th className="w-1/5 py-2">Editar</th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {
                    (data.obtenerProductos) ? 
                      data.obtenerProductos.map( producto => (
                        <Producto
                          key={producto.id}
                          producto={producto}
                        />
                      ))
                      : <tr>
                          <td colSpan="3" className="text-center border px-4 py-2"><Loading /></td>
                        </tr>
                  }
                </tbody>
          </table>

        </Layout>
      </div>
    )
  }
  
};

export default Productos;