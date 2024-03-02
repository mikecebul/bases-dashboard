import { Cookie } from 'puppeteer'
import { ReactNode, createContext, useContext, useState } from 'react'

interface AuthContextType {
  sessionCookie: Cookie | undefined
  setSessionCookie: (cookie: Cookie | undefined) => void
}

const defaultContextValue: AuthContextType = {
  sessionCookie: undefined,
  setSessionCookie: () => {}
}

const AuthContext = createContext<AuthContextType>(defaultContextValue)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [sessionCookie, setSessionCookie] = useState<Cookie | undefined>(undefined)

  return (
    <AuthContext.Provider value={{ sessionCookie, setSessionCookie }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
