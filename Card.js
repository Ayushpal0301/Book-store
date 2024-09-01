import React from 'react'

const Card = ({data,addToCart}) => {

const {id,image,name,author,price}=data 

  return(   
<>
    
    <div className="card p-1 mt-4 ms-1" style={{width:245, height:510}} alt="...">
      <div className='' key={id}>
      <img src={image} class="card-img-top " style={{height:320}} alt='' /> 
      <div className="card-body">
        <h6 className="card-title fw-bold">{name}</h6>
        <p className="card-text">{author}</p>
        <b className='text-danger '>₹ {price}</b> <br />
        <button className='btn btn-primary mt-2' onClick={()=>addToCart(data)}>Add to Cart</button>
      </div>
      </div>
    </div>
 

    </>
    )
  
}

export default Card
