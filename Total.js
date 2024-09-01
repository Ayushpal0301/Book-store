import React from 'react'

const Total = ({size,price,quantity}) => {
    
    const totalPrice = price.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <div className='w-25 pe-5 mt-5 '>
        <div className='mt-3 bg-secondary-subtle'>
      <div className='fw-bold mt-2 ps-4 pt-3'><h5 className='fw-bold'>Price Details</h5></div>
      <hr />  
        <div className='price d-flex'>
      <p className='ps-4'>Price ( {size} items )</p>
         <p className=' ps-5' style={{marginLeft:80}}>₹ {totalPrice}</p>
             
      </div>
      <hr />
      <div className='price d-flex'>
      <p className='ps-4 fw-bold fs-5'>Total Amount</p>
         <p className=' ps-5 fw-bold fs-5' style={{marginLeft:50}}>₹ {totalPrice}</p>
             
      </div>
      <hr />
     
      
      </div>
    </div>
  )
}

export default Total
