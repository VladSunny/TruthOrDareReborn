import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <>
      <div className="fixed top-0 left-0 navbar bg-base-200 flex justify-around h-20 md:h-30">
        <h1 className="font-bold text-primary text-3xl md:text-6xl xl:text-8xl">Truth Or Dare</h1>

        <div className="">
          {location.pathname !== "/studio" && (
            <Link to="/studio">
              <button className="btn btn-md md:btn-xl btn-secondary">Studio</button>
            </Link>
          )}
          {location.pathname !== "/" && (
            <Link to="/">
              <button className="btn btn-lg md:btn-xl btn-primary">Home</button>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
