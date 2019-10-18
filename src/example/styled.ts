import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div<React.CSSProperties>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};

  padding: 30px;
  margin: 50px;
`;

const FlexItem = styled.div<React.CSSProperties>`
  width: auto;
  height: auto;

  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const P = styled.p<React.CSSProperties>`
  padding: 24px;
  width: 400px;
  text-align: center;
  margin: 0;

  font-size: 40px;
  font-weight: 400;
  font-family: 'Roboto Thin', sans-serif;

  border-bottom: rgba(50, 217, 255, 1) 4px solid;
  background: transparent;
  box-shadow: 0 60px 90px 0 rgba(50, 217, 255, 0.65);
  color: pink;
`;

const Title = styled.h1<React.CSSProperties>`
  font-weight: bold;
  font-size: large;
  color: #fff;
`;

const Styled = {
  FlexContainer,
  FlexItem,
  P,
};

export default Styled;
