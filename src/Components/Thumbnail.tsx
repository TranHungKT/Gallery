import { useContext, useState } from 'react'

import AppContext from '../Hook/AppContext'
import ImageThumbnail from './ImageThumbnail'

import { Container } from './Styles/ThumbnailStyles'

const Thumbnail = () => {
  const dataImage = useContext(AppContext)?.state.dataImage
  const indexChoosImage = useContext(AppContext)?.state.indexChooseImage

  return (
    <Container>
      {dataImage &&
        dataImage.map((data, index) => (
          <ImageThumbnail
            dataImage={data}
            indexImage={index}
            key={index + data.imageURL}
          />
        ))}
    </Container>
  )
}

export default Thumbnail
