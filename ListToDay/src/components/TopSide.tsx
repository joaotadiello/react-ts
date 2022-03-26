import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Buttons';
 
interface Iprops {
 
}

const TopSideContent = styled.section`
    width: 100%;
    height: 9vh;
    background-color: red;
    display: flex;
    flex-direction: row;
    align-items: center;
`
 
const TopSide: React.FC<Iprops> = ({}) => {
   return (
       <TopSideContent>
           <Button text='Adicionar' margin='0px 0px 0px 0px' width='5vw' height= '5vh' backgroud='#404040' fontSize='1vw' fontColor='white' borderRadius='0px'/>
           <Button text='Remover' margin='0px 0vw 0px 1vw' width='5vw' height= '5vh' backgroud='#404040' fontSize='1vw' fontColor='white' borderRadius='0px'/>

       </TopSideContent>
   );
}
 
export default TopSide;