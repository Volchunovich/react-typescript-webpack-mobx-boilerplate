import getTheme from '../utils/helpers.utils';

describe('Button', () => {
  describe('Helpers', () => {
    it('Should return primary styles', () => {
      const tmp = getTheme({ primary: true });

      expect(tmp).toMatchSnapshot();
      expect(typeof tmp).toEqual('string');
    });

    it('Should return light styles', () => {
      const tmp = getTheme({ light: true });

      expect(tmp).toMatchSnapshot();
      expect(typeof tmp).toEqual('string');
    });
  });
});
