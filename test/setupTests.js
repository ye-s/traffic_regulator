import React from 'react';
import Enzyme, { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';;

configure(
  {
    adapter: new Adapter(),
    disableLifecycleMethods: true
  }
);

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;