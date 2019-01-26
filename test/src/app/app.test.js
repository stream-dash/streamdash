import '../setup';
import React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';

import App from '../../../src/app/views/app.jsx';

test('renders an h1', t => {
  const wrapper = shallow(<App/>);

  t.true(wrapper.find('h1').length === 1);
});
