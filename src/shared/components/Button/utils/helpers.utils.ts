import { ButtonStyledProps } from '../index';
import Styles from '../styled';

const getTheme = (props: ButtonStyledProps): string => {
  if (props.light) {
    return Styles.LightStyled;
  } else if (props.primary) {
    return Styles.PrimaryStyled;
  } else {
    return Styles.DarkStyled;
  }
};

export default getTheme;
