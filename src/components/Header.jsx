import { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 navbar bg-base-200 flex justify-center h-30">
        <div>
          <h1 className="font-bold text-primary text-4xl md:text-6xl xl:text-8xl">Truth Or Dare</h1>
        </div>
      </div>
    </>
  )
}

export default Header
