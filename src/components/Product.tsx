import type { TProduct } from '../types'

type TproductProps = {
    producto: TProduct
    handleAddToOrder: (product: TProduct) => void
}

const Product = ({ producto, handleAddToOrder } : TproductProps) => {
  return (
    <button
              className="bg-white border border-purple-200 shadow-md rounded-xl p-5 flex flex-col items-center hover:bg-purple-200 active:bg-purple-300 transition-colors duration-200 cursor-pointer"
              onClick={() => handleAddToOrder(producto)}
            >
              <span className="text-lg font-medium text-purple-800 mb-2">{producto.name}</span>
              <span className="text-sm text-gray-500 mb-1">{producto.description}</span>
              <span className="text-base font-bold text-purple-600">${producto.price}</span>
            </button>
  )
}

export default Product