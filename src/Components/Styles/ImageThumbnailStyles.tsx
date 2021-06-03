import styled from 'styled-components'

const Image = styled.div<{ backroundImg: string }>`
  width: 70px;
  height: 70px;
  border: solid white;
  border-width: 4px;
  margin: 0px 10px;
  box-shadow: 5px 5px 6px -3px #000000;
  border-radius: 5px;
  background-image: ${(props) => props.backroundImg};
  background-size: cover;
  background-repeat: no-repeat;
`

const ImageArrow = styled.img`
  width: 20px;
  height: 20px;
  text-align: center;
  margin-bottom: -9px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BlankView = styled.div`
  height: 20px;
`
const Title = styled.div`
  background-color: black;
  color: white;
  padding: 5px 5px;
  border-radius: 5px;
  /* top: -50px; */
  z-index: 1;
  font-size: 10px;
  margin: -10px -10px;
`

export { Image, ImageArrow, Container, BlankView, Title }
