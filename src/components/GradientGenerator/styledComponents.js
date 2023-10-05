import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientDetails});
  height: 100vh;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: white;
`
export const DirectionList = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: white;
`

export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: white;
`

export const InputElement = styled.input`
  height: 30px;
  width: 60px;
  margin: 10px;
`
export const GenerateButton = styled.button`
  font-family: 'Roboto';
  cursor: pointer;
`
