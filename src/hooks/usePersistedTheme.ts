import { useState, useEffect } from 'react'

const usePersistedTheme = (key: string, initialTheme: object) => {
  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const storageValue = localStorage.getItem(key)
      if (storageValue) {
        return JSON.parse(storageValue)
      }
    }
    return initialTheme
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state])

  return [state, setState]
}

export default usePersistedTheme
