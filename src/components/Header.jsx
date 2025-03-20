import { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 navbar bg-base-200 flex justify-around h-20 md:h-30">
        <h1 className="font-bold text-primary text-3xl md:text-6xl xl:text-8xl">Truth Or Dare</h1>

        <div className="">
          <Link to="/studio">
            <button className="btn btn-md md:btn-xl btn-secondary">Studio</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
