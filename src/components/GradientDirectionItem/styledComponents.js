import styled from 'styled-components'

export const Buttons = styled.button`
   padding: 4% 8%;
   background-color: ${props => (props.active ? '#ededed' : '#ffffff79')};
   opacity: ${props => (props.active ? 1 : 0.5)};
   font-weight: bold;
   width:100%;
   height:100%;
  border:none;
  font-size: 1vw;
   border-radius: 4px;

   @media (max-width:767px){
     font-size: 4vw;
   }

   @media (min-width:768px) and (max-width:1200px) {
    font-size:2vw;
   }/
`

export const Li = styled.li`
  width:23%;
  margin:1%;
  @media (max-width:767px) {
    width:48%;
  }/
`
