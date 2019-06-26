import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.js';
import SearchBar from '../components/SearchBar.js';
import BookList from '../components/BookList.js';
import '../setupTests.js';

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should render the SearchBar component', () => {
    expect(wrapper.containsMatchingElement(<SearchBar />)).toEqual(true);
  });

  it('should render the BookList component', () => {
    expect(wrapper.containsMatchingElement(<BookList />)).toEqual(true);
  });
});
