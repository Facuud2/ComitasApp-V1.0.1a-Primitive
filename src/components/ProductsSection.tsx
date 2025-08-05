import { productos } from '../data/db';
import Product from './Product';
import type { TProduct } from '../types';

type TProductsSectionProps = {
    handleAddToOrder: (product: TProduct) => void
}

const ProductsSection = ({ handleAddToOrder } : TProductsSectionProps) => {



  return (
     <section className="w-full max-w-3xl mb-10 ">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {productos.length === 0 ? <p className="text-gray-500 text-center ">No hay productos disponibles</p> :
            productos.map(producto => (
              <Product 
              key={producto.id} 
              producto={producto}
              handleAddToOrder={handleAddToOrder}
              />
            ))
          }
        </div>
      </section>
  )
}

export default ProductsSection