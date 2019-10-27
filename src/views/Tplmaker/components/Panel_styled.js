import styled from "styled-components";

export const Panel = styled.div`
  position: fixed;
  top: 1rem;
  bottom: 1rem;
  left: 1rem;
  width: 10rem;
  background: hsla(215, 13%, 49%, .3);
  border-radius: .4rem;
  overflow: hidden;
  h1 {
    padding: .2rem 0;
    color: #fff;
    text-align: center;
    background: hsla(215, 13%, 49%, .5);
    font-size: 12px;
    font-family: fb sans-serif;
  }
  .panel-layout {
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    color: #fff;
  }
  ul {
    li {
      margin: 1rem;
      span {
        display: inline-block;
        img {
        padding: 0 .3rem 0 0;
          height: 12px;
        }
      }
    }
  }
`;