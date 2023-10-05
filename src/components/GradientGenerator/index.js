import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  Heading,
  Paragraph,
  InputElement,
  DirectionList,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    fromInput: '#8ae323',
    toInput: '#014f7b',
    activeGradientDirection: gradientDirectionsList[0].value,
    gradientDetails: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toInput: event.target.value})
  }

  onChangeDirection = value => {
    this.setState({activeGradientDirection: value})
  }

  GenerateGradient = () => {
    const {fromInput, toInput, activeGradientDirection} = this.state
    this.setState({
      gradientDetails: `to ${activeGradientDirection},${fromInput},${toInput}`,
    })
  }

  render() {
    const {
      fromInput,
      toInput,
      gradientDetails,
      activeGradientDirection,
    } = this.state
    return (
      <GradientGeneratorContainer
        gradientDetails={gradientDetails}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <DirectionList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              gradientDirectionDetails={each}
              onChangeDirection={this.onChangeDirection}
              isActive={activeGradientDirection === each.value}
            />
          ))}
        </DirectionList>
        <Paragraph>Pick the Colors</Paragraph>
        <Paragraph>{fromInput}</Paragraph>
        <InputElement
          type="color"
          value={fromInput}
          onChange={this.onChangeFromColor}
        />
        <Paragraph>{toInput}</Paragraph>
        <InputElement
          type="color"
          value={toInput}
          onChange={this.onChangeToColor}
        />

        <GenerateButton type="button" onClick={this.GenerateGradient}>
          Generate
        </GenerateButton>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
