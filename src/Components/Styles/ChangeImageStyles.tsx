import styled from 'styled-components'

const Container = styled.div`
  width: 100px;
  height: 70vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.img<{ isMouseOver: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  text-align: center;
  filter: ${(props) => (props.isMouseOver ? 'opacity(0.2)' : null)};
`

export { Container, Image }
