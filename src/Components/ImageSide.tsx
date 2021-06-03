import React, { useContext } from 'react'

import AppContext from '../Hook/AppContext'

import { Image, Description, Title, Content } from './Styles/ImageSideStyles'

const ImageSide = () => {
  const dataImage = useContext(AppContext)?.state.dataImage
  const indexChoosImage = useContext(AppContext)?.state.indexChooseImage

  return (
    <>
      {dataImage && indexChoosImage !== undefined && (
        <>
          <Image backroundImg={`url(${dataImage[indexChoosImage].imageURL})`}>
            <Description>
              <Title>{dataImage[indexChoosImage].description.title}</Title>
              <Content>
                {dataImage[indexChoosImage].description.content}
              </Content>
            </Description>
          </Image>
        </>
      )}
    </>
  )
}

export default ImageSide
