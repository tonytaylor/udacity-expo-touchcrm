import React from 'react';
import renderer from 'react-test-renderer';


import App from '../App';

describe('<App />', () => {
  it('has two children', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree.children.length).toBe(1);
  });
  it('renders w/o issue', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});