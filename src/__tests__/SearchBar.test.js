import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../components/SearchBar.js';
import '../setupTests.js';

describe('SearchBar', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<SearchBar />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a form', () => {
    expect(wrapper.containsMatchingElement(<form />)).toEqual(true);
  });
});
