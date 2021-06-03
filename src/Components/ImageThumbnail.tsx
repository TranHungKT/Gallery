import React, { useState, useContext } from 'react'
import { TImage } from './DataImage'
import {
  Image,
  ImageArrow,
  Container,
  BlankView,
  Title
} from './Styles/ImageThumbnailStyles'

import AppContext from '../Hook/AppContext'

import UpArrow from '../Assets/upArrow.png'
import { Action } from '../Hook/AppReducer'

type ImageThumbnailProps = {
  dataImage: TImage
  indexImage: number
}

const ImageThumbnail = (props: ImageThumbnailProps) => {
  const [isMouseOver, setIsMousOver] = useState(false)

  const indexChooseImage = useContext(AppContext)?.state.indexChooseImage
  const dispatch = useContext(AppContext)?.dispatch

  const mouseOver = () => setIsMousOver(true)
  const mouseOut = () => setIsMousOver(false)

  const onClickThumbnail = (index: number) => () => {
    dispatch && dispatch({ type: Action.CHOOSE_IMAGE, payload: index })
  }

  const { dataImage, indexImage } = props
  const { imageURL, description } = dataImage
  return (
    <Container>
      {isMouseOver && indexImage !== indexChooseImage && (
        <Title>{description.title}</Title>
      )}

      <Container>
        {indexChooseImage === indexImage ? (
          <ImageArrow src={UpArrow}></ImageArrow>
        ) : (
          <BlankView></BlankView>
        )}
        <Image
          backroundImg={`url(${imageURL})`}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          onClick={onClickThumbnail(indexImage)}
        ></Image>
      </Container>
    </Container>
  )
}

export default ImageThumbnail
