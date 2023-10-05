// Write your code here
import {ListItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, onChangeDirection, isActive} = props
  const {displayText, value} = gradientDirectionDetails
  const changeDirection = () => {
    onChangeDirection(value)
  }
  return (
    <ListItem>
      <Button type="button" onClick={changeDirection} isActive={isActive}>
        {displayText}
      </Button>
    </ListItem>
  )
}

export default GradientDirectionItem
