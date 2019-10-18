import Styles from '../styled';
import { ButtonStyledProps } from './button.types';

const getTheme = (props: ButtonStyledProps): string => {
  if (!props.buttonType) {
    return Styles.DarkStyled;
  }

  const getThemeByType = {
    primary: Styles.PrimaryStyled,
    light: Styles.LightStyled,
  };

  return getThemeByType[props.buttonType];
};

export default getTheme;
