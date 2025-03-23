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
        <h1 className="font-bold text-primary text-3xl md:text-6xl xl:text-8xl">Truth Or Dare</h1>
        <NavigationButton />
      </div>
    </>
  )
}

export default Header
