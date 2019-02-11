import styled, { keyframes } from 'styled-components';
 
export const cloudInLeft = keyframes`


0% {
  -webkit-transform: translateX(-1000px);
          transform: translateX(-1000px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}

@-webkit-keyframes slide-in-left {
0% {
  -webkit-transform: translateX(-1000px);
          transform: translateX(-1000px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}
}

@keyframes slide-in-left {
0% {
  -webkit-transform: translateX(-1000px);
          transform: translateX(-1000px);
  opacity: 0;
}
100% {
  -webkit-transform: translateX(0);
          transform: translateX(0);
  opacity: 1;
}
}
`