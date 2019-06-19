import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import '../setupTests.js';

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
