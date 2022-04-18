import React,{useState} from 'react'
import { InvoiceItem } from './components/InvoiceItem'
import { Products } from './components/Products'

export const HomePage = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    let newItem = cart.find((pro) => pro.id === item.id);
    let newCart;

    if (newItem) {
      newCart = cart.map((pro) =>
        pro.id === item.id
          ? { ...newItem, qty: newItem.qty + 1 }
          : pro
      );
    } else {
      newCart = [...cart, { ...item, qty: 1 }];
    }

    setCart(newCart);
  };
  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };
  return (
    <div className='row align-items-start'>
    <div className='col-md-4'>
        <InvoiceItem 
        products={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        />
    </div>
    <div className='col-md-8'>
        <Products addToCart={addToCart} />
    </div>
    </div>
  )
}
