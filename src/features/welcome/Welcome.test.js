import React from 'react';
import renderer from "react-test-renderer";

import Welcome from '.';

describe('<Welcome />', () => {
  it('has a single child (canary test)', () => {
    const tree = renderer.create(<Welcome />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});