import styled from "styled-components";


const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: black;
  }

  & > a.active {
    text-decoration: none;
    color: #61dafb;
  }

  & > a:hover {
    color: cadetblue;
  }
`

export const S = {
   NavWrapper
}