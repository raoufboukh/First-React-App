import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/navbar';
import Products from './components/products';
import Swal from 'sweetalert2';
import { Route, Routes } from 'react-router-dom';
function local(pro){
  localStorage.setItem('product',JSON.stringify(pro));
}
function App() {
  const [cart,setCart] = useState([]);
  function deleteCart(){
    Swal.fire({
      title: 'Are you sure?',
      showCancelButton:true
    }).then(data => {
      if(data.isConfirmed){
        setCart([]);
        localStorage.removeItem('product');
      }
    });
  }
  useEffect(() => {
    if(localStorage.getItem('product')){
      setCart(JSON.parse(localStorage.getItem('product')));
    }
  },[])
  function addToCart(product){
    if(cart.length === 0){
      setCart(product);
      local(product);
    }else{
      let update = cart;
      update = {...update, num:update.num + product.num}
      setCart(update);
      local(update);
    }
  }
  return (
    <>
      <div className='popup'></div>
      <Nav cart={cart} deleteCart={deleteCart}/>
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart}/>}/>
      </Routes>
    </>
  );
}

export default App;
