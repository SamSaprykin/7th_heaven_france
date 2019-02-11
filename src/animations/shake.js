import styled, { keyframes } from 'styled-components';
 
export const shakeVertical = keyframes`
    0%,
    100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    }
    20%,
    40%,
    60% {
    -webkit-transform: translateY(8px);
            transform: translateY(8px);
    }
    80% {
    -webkit-transform: translateY(6.4px);
            transform: translateY(6.4px);
    }
    90% {
    -webkit-transform: translateY(-6.4px);
            transform: translateY(-6.4px);
    }
`