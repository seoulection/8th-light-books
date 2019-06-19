import React from 'react';
import { shallow } from 'enzyme';
import BookList from '../components/BookList.js';
import '../setupTests.js';

describe('BookList', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<BookList />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
