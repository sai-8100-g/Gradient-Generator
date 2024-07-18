import styled from 'styled-components'

export const Container = styled.div`
   background-image: linear-gradient(to ${props => props.direction}, ${props =>
  props.firstColor}, ${props => props.secondColor});
   height:100vh;
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;/
`

export const Heading = styled.h1`
   font-size:4vw;
   color: #ededed;
   font-weight: bold; 
   @media (max-width:767px) {
      font-size: 6vw;
   }/
`

export const Para = styled.p`
    font-size: 2vw;
    font-weight: bold;
    color:  #ededed;
    @media (max-width:767px) {
      font-size: 3.5vw;
    }/
`

export const ButtonContainer = styled.ul`
   padding:0px;
   width: 50%; 
   list-style-type:none;
   display:flex;
   flex-wrap:wrap;
   justify-content: space-around;
   @media (max-width:767px) {
      width:100%;
   }/
   `

export const InputContainer = styled.div`
   width: 20%;
   display:flex;
   justify-content:space-between;
   margin-bottom: 3%;
   @media (max-width:767px) {
      width: 50%;
      margin-bottom: 5%;
   }
   @media (min-width:768px) and (max-width:1200px) {
      width:30%;
   }/
`

export const Inputs = styled.input`
   width: 100px;
   height: 40px;
   border: none;
  @media (max-width:767px) {
   width:60px;
   height:25px;
  }/
`
export const SmallInputContainer = styled.div`
    text-align: center;
    display:flex;
    flex-direction:column;/
`

export const GenerateButton = styled.button`
   padding: 1% 4%;
   background-color: #00c9b7;
   color: #1e293b;
   border:none;
   border-radius: 8px;
   font-weight:bold;
   @media (max-width:767px) {
      padding: 3% 8%;
   }

   @media (min-width:768px) and (max-width:1200px) {
      padding: 2% 5%;
   }/
`

export const Label = styled.label`
    color:#ffffff;/
`
