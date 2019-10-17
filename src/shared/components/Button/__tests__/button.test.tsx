import { shallow } from 'enzyme';
import * as React from 'react';
import Button from '../index';

describe('Button', () => {
  describe('StyledComponent', () => {
    it('Should render without errors', () => {
      const component = shallow(<Button>Without errors</Button>).instance();
      expect(component).toMatchSnapshot();
    });

    it('Primary prop should be true', () => {
      const component = shallow(<Button primary>Primary</Button>);
      const prop = component.prop('primary');
      expect(prop).toEqual(true);
      expect(prop).toMatchSnapshot();
    });

    it('Light prop should be true', () => {
      const component = shallow(<Button light>Light</Button>);
      const prop = component.prop('light');
      expect(prop).toEqual(true);
      expect(prop).toMatchSnapshot();
    });
  });
});
