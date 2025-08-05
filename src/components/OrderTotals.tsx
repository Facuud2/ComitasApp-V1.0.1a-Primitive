import { useMemo } from 'react'
import { formatCurrency } from '../helpers/formatCurrency'
import type { TOrder } from '../types'

type TOrderTotalsProps = {
    order: TOrder[]
    tip: number,
    subtotalAmount: number,
    handlePlaceOrder: () => void
}

const OrderTotals = ({order, tip, subtotalAmount, handlePlaceOrder} : TOrderTotalsProps) => {

    const tipAmount = useMemo( () => order.reduce((total, item) => total + (item.quantity * item.price), 0) * (tip / 100) , [order, tip]) 


    const totalAmount = useMemo( () => order.reduce(() =>  subtotalAmount + tipAmount, 0), [order, tip]);

  return (
        <div className='w-full mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-center flex flex-col items-center justify-center space-y-4'>
            
            <h2 className="text-xl font-black text-black mb-4">Totales del Pedido</h2>

            <p className='text-gray-600'>Propina: {''}
                <span className="font-bold text-black ">{formatCurrency(tipAmount)}</span>
            </p>

            <p className='text-gray-600'>Total: {''}
                <span className="font-bold text-black ">{formatCurrency(totalAmount)}</span>
            </p>
            <button 
            className="disabled:opacity-40 disabled:cursor-auto mt-4 disabled:hover:bg-purple-600 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 cursor-pointer"
            disabled={order.length === 0}
            onClick={ () => handlePlaceOrder() }
            >Confirmar Pedido</button>
                
          </div>
  )
}

export default OrderTotals