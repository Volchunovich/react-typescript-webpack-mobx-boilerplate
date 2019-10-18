import { ButtonStyledProps } from '../utils/button.types';
import getTheme from '../utils/helpers.utils';

describe('Button', () => {
  describe('Helpers', () => {
    it("Should received 'primary' buttonType and return string", () => {
      const props: ButtonStyledProps = { buttonType: 'primary' };
      expect(props.buttonType).toBe('primary');
      expect(props.buttonType).toMatchSnapshot('primary');

      const tmp = getTheme(props);
      expect(typeof tmp).toEqual('string');
      expect(tmp).toMatchSnapshot();
    });

    it("Should received 'light' buttonType and return string", () => {
      const props: ButtonStyledProps = { buttonType: 'light' };
      expect(props.buttonType).toBe('light');
      expect(props.buttonType).toMatchSnapshot('light');

      const tmp = getTheme(props);
      expect(typeof tmp).toEqual('string');
      expect(tmp).toMatchSnapshot();
    });
  });
});
