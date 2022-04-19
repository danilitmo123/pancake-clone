import React from 'react'
import styled from 'styled-components'
import Logo from './Logo';

const Block = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 84px;
  max-width: 1160px;
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 10%;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px 0 16px;
    flex-wrap: wrap;
    flex-direction: column;
    height: auto;
  }
`

const Header = () => {
  return (
    <Block>
      <Logo />
    </Block>
  )
}

export default Header
