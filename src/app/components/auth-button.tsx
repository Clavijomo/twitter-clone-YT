'use client'

import { Session } from "inspector";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "../../../node_modules/@supabase/auth-helpers-nextjs/dist/index";

export function AuthButton () {
  const [session, setSession] = useState<Session>();
  const supabase = createClientComponentClient();
  
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  }

  useEffect(() => {
    const getSession = async () => {
      const {data} = await supabase.auth.getSession();
      setSession(data.session);
    }

    getSession();
  }, []);

  return (
    <header>
      {
        session === null ? (
          <button onClick={handleSignIn} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">        
            Iniciar sesión con Github
          </button>
        ) : <button onClick={handleSignOut}>Cerrar sesión</button>
      }
    </header>
  )
}
