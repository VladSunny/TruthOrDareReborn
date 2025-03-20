import { useState, useEffect } from 'react';
import supabase from '../supabase-client';

function Studio() {
  return (
    <>
      <div className="flex justify-center items-center h-dvh flex-col">
        <h1 className='absolute top-22 md:top-40 text-3xl md:text-6xl xl:text-8xl font-bold text-secondary bg-base-200 p-4 rounded-box'>
          Studio
        </h1>

        <fieldset class="fieldset bg-base-200 border border-base-300 mt-30 p-4 rounded-box w-3/4 md:w-4/7 lg:w-3/7">
          <legend class="fieldset-legend text-xl md:text-3xl text-primary">Your Idea</legend>
          
          <textarea class="textarea h-30 max-h-50 w-full md:text-2xl" placeholder="Idea"></textarea>
          
          <span className="label text-xl md:text-2xl mt-5 text-secondary">Type</span>
          <select className='text-xl outline-primary text-secondary'>
            <option>Truth</option>
            <option>Dare</option>
          </select>
        </fieldset>

        <button className='btn btn-lg btn-success w-1/3 lg:w-1/5 mt-10'>
            Submit
        </button>
      </div>
    </>
  );
}

export default Studio;