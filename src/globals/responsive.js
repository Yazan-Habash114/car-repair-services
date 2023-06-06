import { css } from "styled-components";

export const Mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};

export const Portrait = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const Landscape = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};

export const MediumScreen = (props) => {
  return css`
    @media only screen and (max-width: 1224px) {
      ${props}
    }
  `;
};
