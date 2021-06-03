import styled from 'styled-components'

const Image = styled.div<{ backroundImg: string }>`
  width: 70vw;
  height: 70vh;
  background-image: ${(props) => props.backroundImg};
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
`
const Description = styled.div`
  display: flex;
  align-self: flex-end;
  bottom: 0;
  flex-direction: column;
  width: 100%;
  background-color: #00000080;
  padding: 0px 20px;
`

const Title = styled.h1`
  margin-bottom: 0px;
  color: white;
`
const Content = styled.p`
  color: #ffffff90;
`
export { Image, Description, Title, Content }
