/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow } from 'enzyme';

import Foo from './Foo';

test('renders without exploding', () => {
  // Given
  const foo = (<Foo />);
  // When
  const wrapper = shallow(foo);
  // Then
  expect(wrapper.length).toEqual(1);
});
