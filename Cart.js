import React from 'react'
import Total from './Total'

const Cart = ({count,removeFromCart,sub,add,size}) => {


  return (
    


    <div className='d-flex'>
      <div className='Cart m-3 bg-light w-75'>
<div className='items bg-secondary-subtle m-5 p-5'>

  {count.length === 0 ?(
    <p className='fw-bold'>Your cart is empty</p>
  ):( count.map((item,index)=>(

<div div className='border-bottom border-black pb-4 pt-4'>
  <div className='d-flex ' key={index}>
  <div className='image'>
    <img className='' style={{width:150, height:200}} src={item.image} alt="" />
  </div>
  <div className='ps-5 pt-4'>
    <h3 className='fw-bold'>{item.name}</h3>
    <h5 className=''>{item.author}</h5>
    <p className='text-danger fw-bold'>₹ {item.price}</p>
    <button className='btn btn-primary' onClick={()=>removeFromCart(index)}>Remove</button>
  </div>

  </div>
  <div className='d-flex' style={{marginLeft:500 , paddingBottom:-10}}>
       <button className='bg-secondary btn rounded-5 fw-bold fs-3 ' style={{width:50,marginTop:-100,marginBottom:100, cursor:'pointer'}} onClick={()=>add(item.id)} >+</button>
       <button className=' btn fw-bold fs-3 ' style={{width:50,marginTop:-100,marginBottom:100, cursor:'pointer'}}>{item.quantity}</button>
      <button className='bg-secondary btn rounded-5 fw-bold fs-3 ' style={{width:50,marginTop:-100,marginBottom:100, cursor:'pointer'}}  onClick={()=>sub(item.id)} >-</button>
  </div>
  </div>
  )
      ))
    }
    </div>
</div>

      <Total price={count} size={size} />
    </div>
  )
}


export default Cart
