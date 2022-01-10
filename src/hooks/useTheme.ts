import { useContext } from 'react'

import { SwitchThemeContext } from '../contexts/SwitchThemeContext'

const useTheme = () => useContext(SwitchThemeContext)

export default useTheme
