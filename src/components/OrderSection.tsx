
import { formatCurrency } from "../helpers/formatCurrency"
import type { TOrder, TProduct } from "../types"


type TOrderSectionProps = {
  order: TOrder[],
  handleRemoveFromOrder: (id: TProduct["id"]) => void
  subtotalAmount: number
}

const OrderSection = ({ order, handleRemoveFromOrder, subtotalAmount } : TOrderSectionProps) => {


  return (
    <section className="w-full max-w-2xl mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Resumen del Pedido</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center min-h-[100px] text-gray-400">
          {order.length === 0 
          ? <span className="italic text-lg">(Sin productos seleccionados)</span> 
          :  order.map(item => (
            <div key={item.id} className="w-full mb-2">
                <div className='flex justify-between items-center mb-2 space-y-8 last-of-type:border-b '>
                  <div className='flex items-center gap-4'>
                  <span className="text-black font-bold">{item.name}</span> 
                  <span className='text-gray-800 font-bold'> x {item.quantity}</span>
                  </div>
                  
                <div className='flex items-center gap-10'>
                  <span className="text-purple-600">{formatCurrency(item.quantity * item.price)}</span>
                <button 
                className='w-8 h-8 rounded-full bg-red-700 text-white font-black cursor-pointer hover:bg-red-800'
                onClick={() => handleRemoveFromOrder(item.id)}
                > X </button>
                </div>
                
                </div>
                <div>
                
                </div>
                
              </div>
              

              
            )
          )

          }
          {order.length !== 0 && (
            <div className="w-full mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center space-y-4">
             <p className='text-gray-600'>Subtotal: {''}
                <span className="font-bold text-black ">{formatCurrency(subtotalAmount)}</span>
                </p>
          </div>
          )}
          
         
        </div>
      </section>
  )
}

export default OrderSection