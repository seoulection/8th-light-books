import React from 'react';
import { mount, shallow } from 'enzyme';
import SearchBar from '../components/SearchBar.js';
import '../setupTests.js';

describe('SearchBar', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<SearchBar />));

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a form', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render a Book Search h2 element', () => {
    expect(wrapper.find('h2').text()).toBe('Book Search:');
  });

  it('should render an input element', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should capture the term correctly', () => {
    const component = mount(<SearchBar />);
    const input = component.find('input');
    input.instance().value = 'trees';
    input.simulate('change');
    expect(component.state().term).toEqual('trees');
  });

  it('should cancel the event when form is submitted', () => {
    const onFormSubmit = jest.fn();
    const component = mount(<SearchBar onFormSubmit={onFormSubmit} />);
    let prevented = false;
    component.find('form').simulate('submit', {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });

  it('should pass the correct props on form submit', () => {
    const onFormSubmit = jest.fn();
    const component = mount(<SearchBar onFormSubmit={onFormSubmit} />);
    const form = component.find('form');
    form.simulate('submit');
    expect(onFormSubmit.mock.calls.length).toBe(1);
  });
});
