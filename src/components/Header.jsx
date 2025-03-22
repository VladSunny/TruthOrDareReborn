import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import supabase from '../supabase-client';

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

  console.log(session?.user)

  const signUp = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
  }

  // const logOut = async () => {
  //   await supabase.auth.signOut()
  // }

  // if (!session) {
  //   return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  // }

  return (
    <>
      <div className="fixed top-0 left-0 navbar bg-base-200 flex justify-around h-20 md:h-30">
        <h1 className="font-bold text-primary text-3xl md:text-6xl xl:text-8xl">Truth Or Dare</h1>
        
        {/* <div className='h-full absolute right-10 flex justify-center items-center'>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
              </ul>
            </div>
          </div>
        </div> */}
        {session && (
          <div>
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
        )}
        {!session && (
          <button className="btn btn-md md:btn-xl btn-primary" onClick={signUp}>
            Sign in
          </button>
        )}
      </div>
    </>
  )
}

export default Header
