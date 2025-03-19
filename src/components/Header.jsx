import { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div class="flex justify-center items-center w-full px-4">
        <Link to="/">
          <div class="card flex justify-center items-center w-5xl my-5">
              <h1 class="text-center">Truth Or Dare</h1>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Header
