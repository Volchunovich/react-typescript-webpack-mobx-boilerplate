import styled from 'styled-components';
import getTheme from './utils/helpers.utils';

export interface ButtonStyledProps {
  primary?: boolean;
  light?: boolean;
}

const Button = styled.button<ButtonStyledProps>`
  ${(props: ButtonStyledProps) => getTheme(props)};

  min-width: 350px;
  margin: 0 20px;
  text-align: center;
  font-size: 60px;
  font-family: 'ATCKrueger', sans-serif;
  height: 90px;
  line-height: 90px;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

export default Button;
