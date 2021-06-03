import { useContext, useState } from 'react'

import AppContext from '../Hook/AppContext'

import { Container, Image } from './Styles/ChangeImageStyles'

import LeftArrow from '../Assets/leftArrow.png'
import RightArrow from '../Assets/rightArrow.png'
import { Action } from '../Hook/AppReducer'

type ChangeImageProps = {
  typeChange: number // 0 is left, 1 is right
}

const ChangeImage = (props: ChangeImageProps) => {
  const { typeChange } = props

  const [isMouseOver, setIsMouseOver] = useState(false)

  const dispatch = useContext(AppContext)?.dispatch

  const onPressImage = () => {
    if (dispatch) {
      if (typeChange === 0) {
        return dispatch({ type: Action.CHOOSE_PREVIOUS_IMAGE })
      }
      return dispatch({ type: Action.CHOOSE_NEXT_IMAGE })
    }
  }

  const mouseOver = () => setIsMouseOver(true)

  const mouseOut = () => setIsMouseOver(false)

  return (
    <Container>
      {typeChange === 0 ? (
        <Image
          src={LeftArrow}
          onClick={onPressImage}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          isMouseOver={isMouseOver}
        ></Image>
      ) : (
        <Image
          src={RightArrow}
          onClick={onPressImage}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          isMouseOver={isMouseOver}
        ></Image>
      )}
    </Container>
  )
}

export default ChangeImage
