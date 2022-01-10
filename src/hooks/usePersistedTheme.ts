import { useState, useEffect } from 'react'

const usePersistedTheme = (key: string, defaultTheme: any) => {
  const [state, setState] = useState(defaultTheme)

  useEffect(() => {
    const storageValue = localStorage.getItem(key)

    if (storageValue) {
      setState(JSON.parse(storageValue))
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state])

  return [state, setState]
}

export default usePersistedTheme
