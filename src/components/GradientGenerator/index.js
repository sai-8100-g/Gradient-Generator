import {Component} from 'react'

import {
  Container,
  Heading,
  Para,
  ButtonContainer,
  InputContainer,
  Inputs,
  GenerateButton,
  Label,
  SmallInputContainer,
} from './styledComponents'

import DirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    firstInput: '#8ae323',
    secondInput: '#014f7b',
    buttonDirection: '',
    id: gradientDirectionsList[0].directionId,
  }

  onChangeFirstColor = event => {
    this.setState({firstInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondInput: event.target.value})
  }

  getDirection = (value, id) => {
    this.setState({buttonDirection: value, id})
  }

  onClickToGenerateGradient = () => {
    const {firstInput, secondInput, buttonDirection} = this.state
    this.setState({
      firstColor: firstInput,
      secondColor: secondInput,
      direction: buttonDirection,
    })
  }

  render() {
    const {
      firstColor,
      secondColor,
      direction,
      id,
      firstInput,
      secondInput,
    } = this.state
    return (
      <Container
        data-testid="gradientGenerator"
        direction={direction}
        firstColor={firstColor}
        secondColor={secondColor}
      >
        <Heading>Generate a Css Color Gradient</Heading>
        <Para>Choose Direction</Para>
        <ButtonContainer>
          {gradientDirectionsList.map(eachObj => (
            <DirectionItem
              data={eachObj}
              key={eachObj.directionId}
              getDirection={this.getDirection}
              isActive={eachObj.directionId === id}
            />
          ))}
        </ButtonContainer>
        <Para>Pick the Colors</Para>
        <InputContainer>
          <SmallInputContainer>
            <Label as="p" htmlFor="firstColor">
              {firstColor}
            </Label>
            <Inputs
              id="firstColor"
              type="color"
              value={firstInput}
              onChange={this.onChangeFirstColor}
            />
          </SmallInputContainer>
          <SmallInputContainer>
            <Label as="p" htmlFor="secondColor">
              {secondColor}
            </Label>
            <Inputs
              id="secondColor"
              type="color"
              onChange={this.onChangeSecondColor}
              value={secondInput}
            />
          </SmallInputContainer>
        </InputContainer>
        <GenerateButton type="button" onClick={this.onClickToGenerateGradient}>
          Generate
        </GenerateButton>
      </Container>
    )
  }
}

export default GradientGenerator
