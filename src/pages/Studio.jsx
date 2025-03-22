import { useState } from 'react';
import supabase from '../supabase-client';

function Studio() {
  const [showAlert, setShowAlert] = useState(false);
  const [ideaText, setIdeaText] = useState('');
  const [selectedOption, setSelectedOption] = useState('truth');

  const handleSubmit = () => {
    const formData = {
      idea: ideaText,
      type: selectedOption,
      timestamp: new Date().toISOString()
    };

    console.log('Form Submission:', formData);

    showAlertMessage();
  };

  const showAlertMessage = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  return (
    <>
      <div className="flex items-center h-dvh flex-col">
        <h1 className='absolute top-22 md:top-40 text-3xl md:text-6xl xl:text-8xl font-bold text-secondary bg-base-200 p-4 rounded-box'>
          Studio
        </h1>

        <div className='flex flex-col items-center justify-around absolute top-40 md:top-75 w-screen'>
          <fieldset className="fieldset bg-base-200 border border-base-300 p-4 rounded-box w-3/4 shadow-2xl hover:shadow-secondary transition-all duration-500 md:w-4/7 lg:w-3/7">
            <legend className="fieldset-legend text-xl md:text-3xl text-primary">Your Idea</legend>
            
            <textarea 
              className="textarea h-30 max-h-50 w-full md:text-2xl text-accent-content" 
              placeholder="Idea"
              value={ideaText}
              onChange={(e) => setIdeaText(e.target.value)}
            />
            
            <div className='flex flex-col space-y-3 mt-5'>
              <div className='flex flex-row space-x-3 items-center'>
                <input 
                  type="radio" 
                  name="radio-4" 
                  className="radio radio-primary" 
                  checked={selectedOption === 'truth'}
                  onChange={() => setSelectedOption('truth')}
                />
                <p className='text-xl md:text-2xl text-primary'>Truth</p>
              </div>

              <div className='flex flex-row space-x-3 items-center'>
                <input 
                  type="radio" 
                  name="radio-4" 
                  className="radio radio-secondary"
                  checked={selectedOption === 'dare'}
                  onChange={() => setSelectedOption('dare')}
                />
                <p className='text-xl md:text-2xl text-secondary'>Dare</p>
              </div>
            </div>
          </fieldset>

          <button 
            className='btn btn-lg btn-success w-1/3 lg:w-1/5 mt-10 hover:btn-xl transition-all duration-500 subpixel-antialiased' 
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>

      <div className='flex justify-center'>
        <div 
          role="alert" 
          className={`absolute top-1/5 md:top-1/3 alert alert-success alert-soft transition-opacity duration-500 ${
            showAlert ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className='text-xl'>Sended!</span>
        </div>
      </div>
    </>
  );
}

export default Studio;