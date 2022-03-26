import React, { useState } from 'react';
import styled from 'styled-components';
 
interface Iprops {
 
}

const ItemContent = styled.section`
    width: 90%;
    height: 20%;
    background-color: pink;
    margin-top: 1vh;
    min-height: 20%;
`
 
const ItemCard: React.FC<Iprops> = ({}) => {
 
   return (
       <ItemContent>
            
       </ItemContent>
   );
}
 
export default ItemCard;