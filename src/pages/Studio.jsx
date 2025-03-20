import { useState, useEffect } from 'react';
import supabase from '../supabase-client';

function Studio() {
  return (
    <>
      <div className="flex justify-center items-center h-dvh flex-col">
        <h1 className='absolute top-30 md:top-40 text-3xl md:text-6xl xl:text-8xl font-bold text-secondary bg-base-200 p-4 rounded-box'>
          Studio
        </h1>

        <fieldset class="fieldset bg-base-200 border border-base-300 mt-20 p-4 rounded-box w-2/3 md:w-4/7 lg:w-3/7">
          <legend class="fieldset-legend text-xl md:text-3xl">Your Idea</legend>
          
          <textarea class="textarea h-50 max-h-80 w-full md:text-2xl" placeholder="Bio"></textarea>
          
          <span className="label text-xl md:text-2xl mt-5">Type</span>
          <select className='text-xl outline-primary'>
            <option>Truth</option>
            <option>Dare</option>
          </select>

        </fieldset>
      </div>
    </>
  );
}

export default Studio;