import React, { useState } from 'react';
import styled from 'styled-components';
 
interface Iprops {
 
}

const TopSideContent = styled.section`
    width: 100%;
    height: 9vh;
    background-color: red;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
 
const TopSide: React.FC<Iprops> = ({}) => {
   return (
       <TopSideContent>
           
       </TopSideContent>
   );
}
 
export default TopSide;