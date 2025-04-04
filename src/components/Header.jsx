import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import supabase from '../supabase-client';
import NavigationButton from './NavigationButton';

function Header() {
  const location = useLocation();
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 navbar bg-base-200 flex justify-around h-20 md:h-30">
        <div className='flex flex-col justify-center h-full'>
          <h1 className="font-bold text-primary text-3xl md:text-5xl xl:text-6xl">
            Truth Or Dare
          </h1>
          {session?.user && <p className="text-xl md:text-2xl">Hello, {session?.user?.user_metadata?.full_name}</p>}
        </div>
        <NavigationButton />
      </div>
    </>
  )
}

export default Header
