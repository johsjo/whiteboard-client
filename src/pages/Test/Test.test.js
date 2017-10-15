/* eslint-env jest */
/* eslint import/no-extraneous-dependencies:0 */
import React from 'react';
import { shallow } from 'enzyme';

import Test from './Test';

test('renders without exploding', () => {
  // Given
  const test = (<Test />);
  // When
  const wrapper = shallow(test);
  // Then
  expect(wrapper.length).toEqual(1);
});
