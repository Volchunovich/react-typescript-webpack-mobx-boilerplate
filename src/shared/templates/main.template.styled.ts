import styled from 'styled-components';
import Colors from '../constants/colors.const';

const FlexContainer = styled.div`
  text-align: center;
  height: 100%;

  margin: 0 40px;
  padding: 20px;
`;

const FlexItem = styled.div`
  //width: 768px; 
  
`;

const MainStyles = {
  FlexContainer,
  FlexItem,
};

export default MainStyles;


export const DefaultText = styled.p`
  font-family: 'Berylium', sans serif;
  font-size: 60px;
  color: ${Colors.yellow};
`;
