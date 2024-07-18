import {Li, Buttons} from './styledComponents'

const DirectionItem = props => {
  const {data, getDirection, isActive} = props
  const {displayText, value, directionId} = data
  console.log(isActive)
  const onClickToSelectDirection = () => {
    getDirection(value, directionId)
  }
  return (
    <Li>
      <Buttons
        active={isActive}
        type="button"
        value={value}
        onClick={onClickToSelectDirection}
      >
        {displayText}
      </Buttons>
    </Li>
  )
}

export default DirectionItem
