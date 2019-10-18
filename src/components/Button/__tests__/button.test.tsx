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
      const component = shallow(<Button buttonType='primary'>Primary</Button>);
      const prop = component.prop('buttonType');
      expect(prop).toEqual('primary');
      expect(prop).toMatchSnapshot();
    });

    it('Light prop should be true', () => {
      const component = shallow(<Button buttonType='light'>Light</Button>);
      const prop = component.prop('buttonType');
      expect(prop).toEqual('light');
      expect(prop).toMatchSnapshot();
    });
  });
});
