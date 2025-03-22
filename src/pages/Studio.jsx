import { useState, useEffect } from 'react';
import supabase from '../supabase-client';

function Studio() {
  return (
    <>
      <div className="flex justify-center items-center h-dvh flex-col">
        <h1 className='absolute top-22 md:top-40 text-3xl md:text-6xl xl:text-8xl font-bold text-secondary bg-base-200 p-4 rounded-box'>
          Studio
        </h1>

        <fieldset className="fieldset bg-base-200 border border-base-300 mt-30 p-4 rounded-box w-3/4 md:w-4/7 lg:w-3/7">
          <legend className="fieldset-legend text-xl md:text-3xl text-primary">Your Idea</legend>
          
          <textarea className="textarea h-30 max-h-50 w-full md:text-2xl text-accent-content" placeholder="Idea"></textarea>
          
          <div className='flex flex-col space-y-3 mt-5'>

            <div className='flex flex-row space-x-3 items-center'>
              <input type="radio" name="radio-4" className="radio radio-primary" defaultChecked />
              <p className='text-xl md:text-2xl text-primary'>Truth</p>
            </div>

            <div className='flex flex-row space-x-3 items-center'>
              <input type="radio" name="radio-4" className="radio radio-secondary" />
              <p className='text-xl md:text-2xl text-secondary'>Dare</p>
            </div>

          </div>
        </fieldset>

        <button className='btn btn-lg btn-success w-1/3 lg:w-1/5 mt-10'>
            Submit
        </button>
      </div>
    </>
  );
}

export default Studio;