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
    position: relative;
    padding: .2rem 0;
    color: #fff;
    text-align: center;
    background: hsla(215, 13%, 49%, .5);
    font-size: 12px;
    font-family: fb sans-serif;
    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 1rem;
      cursor: default;
      color: hsl(3, 100%, 66%);
    }
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
      cursor: default;
      span {
        display: inline-block;
        img {
        padding: 0 .3rem 0 0;
          height: 12px;
        }
      }
    }
    li:hover {
      color: hsl(16, 99%, 60%);
    }
  }
  .form-gp {
    width: auto;
    margin: 1rem;
    input {
      border: 0;
      border-radius: .2rem;
      height: 1.2rem;
      line-height: 1.2rem;
      width: 100%;
    }
  }
`;

export const PanelSon = styled(Panel)`
  left: 12rem;
  bottom: auto;
  .panel-layout {
    position: relative;
    display: block;
  }
`;

export const Button = styled.div`
  width: auto;
  text-align: center;
  background: hsl(105, 64%, 46%);
  margin: 1rem auto;
  padding: .3rem;
  border-radius: .2rem;
  cursor: default;
  color: #fff;
  &:hover {
    background: hsl(105, 64%, 50%);
  }
`;