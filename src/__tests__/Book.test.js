import React from 'react';
import { shallow } from 'enzyme';
import Book from '../components/Book.js';
import '../setupTests.js';

describe('Book', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Book />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
