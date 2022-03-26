import React, { Props, useState } from 'react';
import styled from 'styled-components';

interface Iprops {
    width: string;
    height: string;
    fontColor: string;
    backgroud: string;
    fontSize: string;
    borderRadius: string;
    margin: string;
    text:string;
}

const ButtonContent = styled.section<Iprops>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.fontColor};
    background-color: ${(props) => props.backgroud};
    border-radius: ${(props) => props.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${(props) => props.margin};
`


const Button: React.FC<Iprops> = ({ text,width, height, backgroud, fontSize, fontColor, borderRadius, margin }) => {
    return (
        <>
            <ButtonContent text='' width={width} height={height} backgroud={backgroud} fontSize={fontSize} margin={margin} fontColor={fontColor} borderRadius={borderRadius} >
                {text}
            </ButtonContent>
        </>
    );
}

export default Button;