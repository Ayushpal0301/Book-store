import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({size}) => {
  return (
    <div>
      <div className='bg-dark d-flex text-light p-3 ps-5 fs-5 fw-bold'>

      <Link to="/" className='link-underline link-underline-opacity-0 text-light'> <i class="fa-solid fa-book "></i> My Books</Link>
      <Link to="/Cart" className='link-underline link-underline-opacity-0 text-light fs-3' style={{marginLeft:1150}}> <i class="fa-solid fa-cart-shopping"></i></Link>
      <span className='bg-danger ps-2 pe-2 rounded-5 ms-1' style={{marginTop:-10, marginBottom:20}}>{size}</span>
      </div>
    </div>
  )
}

export default Navbar
