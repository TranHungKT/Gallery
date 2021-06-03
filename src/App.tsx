import { useEffect, useReducer } from 'react'

import './App.css'

import AppContext from './Hook/AppContext'
import ChooseImageReducer, { Action, initialState } from './Hook/AppReducer'

import { ImageSide, ChangeImage, Thumbnail } from './Components'

function App() {
  const [state, dispatch] = useReducer(ChooseImageReducer, initialState)

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        dispatch({ type: Action.CHOOSE_NEXT_IMAGE })
      }
      if (e.key === 'ArrowLeft') {
        dispatch({ type: Action.CHOOSE_PREVIOUS_IMAGE })
      }
    })
  }, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <div className='ImageView'>
          <ChangeImage typeChange={0} />
          <ImageSide />
          <ChangeImage typeChange={1} />
        </div>
        <Thumbnail />
      </div>
    </AppContext.Provider>
  )
}

export default App
