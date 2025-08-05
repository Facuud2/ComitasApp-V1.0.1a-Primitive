import './App.css';
import useOrder from './hooks/useOrder';
import ProductsSection from './components/ProductsSection';
import OrderSection from './components/OrderSection';
import TipSection from './components/TipSection';
import OrderTotals from './components/OrderTotals';

function App() {

  const { order, handleAddToOrder, handleRemoveFromOrder, tip, setTip, subtotalAmount, handlePlaceOrder } = useOrder();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center py-8 px-4 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-8 text-center drop-shadow-lg">Comitas App - Sistema de delivery
        
      </h1>

     <ProductsSection 
     handleAddToOrder={handleAddToOrder}
     
     />

      <OrderSection 
      order={order}
      handleRemoveFromOrder={handleRemoveFromOrder}
      subtotalAmount={subtotalAmount}
      />

      
      <TipSection 
      setTip={setTip}
      tip={tip}
      />

      <OrderTotals
      order={order}
      tip={tip}
      subtotalAmount={subtotalAmount}
      handlePlaceOrder={handlePlaceOrder}
      />

    </div>
  );
}

export default App;
