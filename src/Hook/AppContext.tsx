import React, { createContext } from 'react'
import { IINITIAL_STATE, TAction } from './AppReducer'

type AppContextType = {
  state: IINITIAL_STATE
  dispatch: React.Dispatch<TAction>
}

export default createContext<AppContextType | null>(null)
