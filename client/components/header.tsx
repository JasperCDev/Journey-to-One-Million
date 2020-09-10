import React from 'react';
import styled from 'styled-components';

const HeaderTag = styled.header`
  height: 10vh;
  background-color:black;
  background-image:
  radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
  radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
  radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
  radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
  grid-column-start: 1;
  grid-column-end: 3;
`;


const Header: React.FC = () => {
  return (
    <HeaderTag></HeaderTag>
  );
}

export default Header;
