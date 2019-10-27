import styled from "styled-components";
import "../../assets/css/format.css";

export const Main = styled.div`
  width: 15rem;
  margin: 3rem auto;
  img {
    width: 100%;
  }
`;

export const Menus = styled.div`
  width: auto;
  margin: 3rem auto;
  text-align: center;
  .links {
    display: inline-block;
    margin: 0 auto;
    border: 1px solid hsl(215, 13%, 49%);
    border-radius: .2rem;
    background: hsla(215, 13%, 49%, .1);
    a {
      display: inline-block;
      margin: 0;
      padding: .3rem .5rem;
      color: hsl(215, 13%, 49%);
      transition: all .5s;
    }
    a:hover {
      color: hsl(16, 99%, 60%);
      transition: all .5s;
    }
  }
`;

export const Copy = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1rem;
  text-align: center;
  font-size: 12px;
  color: hsl(240, 1%, 70%);
`;