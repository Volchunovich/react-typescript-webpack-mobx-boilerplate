import { createGlobalStyle, css } from 'styled-components';
import Colors from '../shared/constants/colors.const';
import beryliumFont from '../shared/assets/fonts/berylium/berylium-bd.ttf';
import ralewayFont from '../shared/assets/fonts/Raleway/Raleway-Medium.ttf';

const fontFaces = css`
  @font-face {
    font-family: 'Berylium';
    //font-style: normal;
    //font-weight: normal;
    src: url(${beryliumFont});
  }
  
  @font-face {
    font-family: 'Raleway';
    //font-style: normal;
    //font-weight: normal;
    src: url(${ralewayFont});
  }
`;

const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  
  * {
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: ${Colors.main};
    font-family: 'sans-serif';
  }
  
`;

export default GlobalStyle;
