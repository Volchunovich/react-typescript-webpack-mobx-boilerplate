import styled from 'styled-components';
import { ButtonStyledProps } from './utils/button.types';
import getTheme from './utils/helpers.utils';

const Button = styled.button<ButtonStyledProps>`
  ${(props: ButtonStyledProps) => getTheme(props)};

  min-width: 350px;
  margin: 0 20px;
  text-align: center;
  font-size: 60px;
  font-family: 'Courier New', sans-serif;
  height: 90px;
  line-height: 90px;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export default Button;
