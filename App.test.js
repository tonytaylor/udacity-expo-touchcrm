import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has a single child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it('renders w/o issue', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});