import styled from "styled-components";

export const HeaderLayout = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  left: 0;
  height: 3rem;
  line-height: 3rem;
  background: hsl(220, 15%, 12%);
  color: #fff;
  
  .group {
    display: inline-block;
    height: 3rem;
    line-height: 3rem;
  }
`;

export const Logo = styled.div`
  position:absolute;
  top: .75rem;
  left: 1rem;
  height: 1.5rem;
  
  img {
    display: inline;
    height: 1.5rem;
  }
`;

export const Button = styled.div`
  display: inline-block;

  img {
    display: inline;
    height: 0.8rem;
  }
`;