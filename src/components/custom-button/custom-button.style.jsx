import styled, { css } from "styled-components";

const invertedButtonStyle = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    position: absolute;
    bottom: 100px;
    opacity: 0.7;

        &:hover {
        background-color: black;
        color: white;
        border: none;
        opacity: 0.8;
        }
`;

const googleSignInStyle = css`
    background-color: #4285f4;
    color: white;
    border: 1px solid #4285f4;

        &:hover {
        background-color: #357ae8;
        }
`;

const buttonStyle = css`
    background-color: black;
    color: white;
    border: none;
    
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        }
`

const getButtonStyle = props => {
    if(props.isGoogleSignIn) {
        return googleSignInStyle;
    }

    return props.inverted ? invertedButtonStyle : buttonStyle
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyle}
`;