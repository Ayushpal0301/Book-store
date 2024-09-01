import React,{useState} from 'react'
import Navbar from './Navbar'
import Card from './Card'
import data from './Api'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Cart from'./Cart'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Books = () => {
    const[count,setcount]=useState([]) 
     
    const addToCart=(data)=>{
        let ispresent = false;
        count.forEach((product) => {
          if (data.id === product.id){
            NotificationManager.error('warning message',"This product is already in your cart!",1000)
            ispresent = true;}
        });
        if (ispresent) return;
        setcount([...count, data]);
      NotificationManager.success('Success message', 'Product is add in cart',1000);
    }

    const add=(itemid)=>{
      setcount((prevItems)=>
      prevItems.map((item)=>
      item.id === itemid  && item.quantity < 10
      ?{...item, quantity: item.quantity + 1 }:item)
      );
      };

      const sub=(itemid)=>{
        setcount((prevItems)=>
        prevItems.map((item)=>
        item.id === itemid && item.quantity > 1
        ?{...item, quantity: item.quantity - 1 }:item)
        );
        };

    const removeFromCart = (index) => {
      const newCart = count.filter((item, i) => i !== index);
      setcount(newCart);
      NotificationManager.success('Success message', 'Successfully remove a product',1000);
  };

  

  return (
    <div>
      <Navbar size={count.length}/> 
    
      <Routes>
        
       <Route path='/' element={ <div class="row  m-2 g-4"> {data.map((data)=>(<Card data ={data} addToCart={addToCart}/>  ))}</div>} />
  
        <Route path='/Cart' element={<Cart count={count} add={add} sub={sub} removeFromCart={removeFromCart} size={count.length}/>} />
     
        </Routes>
    <NotificationContainer/>
    </div>
  ) 
}

export default Books
