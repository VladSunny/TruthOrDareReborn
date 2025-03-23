import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import supabase from '../supabase-client';

function NavigationButton() {
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

  const signUp = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  const logOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
    <div className="dropdown z-10">
        <div tabIndex={0} role="button" className="btn btn-md btn-primary md:btn-xl m-1">Navigate</div>
        <ul tabIndex={0} className="dropdown-content menu bg-secondary-content py-3 rounded-box z-1 shadow-sm w-full h-30 md:h-40 flex flex-col justify-around items-center">
        {location.pathname !== "/studio" && session && (
            <li>
                <Link to="/studio">
                    <button className="btn btn-sm md:btn-md btn-secondary">Studio</button>
                </Link>
            </li>
        )}
        {location.pathname !== "/" && (
            <li>
                <Link to="/">
                    <button className="btn btn-sm md:btn-md btn-secondary">Home</button>
                </Link>
            </li>
        )}
        {session ? (
            <li>
            <button onClick={logOut} className="btn btn-sm md:btn-md btn-secondary">Logout</button>
            </li>
        ) : (
            <li>
            <button onClick={signUp} className="btn btn-sm md:btn-md btn-secondary">Login</button>
            </li>
        )}
        </ul>
    </div>
    </>
  )
}

export default NavigationButton
