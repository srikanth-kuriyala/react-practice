import React from 'react';

import { HeaderMenu } from './HeaderMenu';
import menu from './menu.json';
import 'bootstrap/dist/css/bootstrap.css';

export default {
  title: 'Example/Header',
  component: HeaderMenu,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <HeaderMenu {...args} />;

export const Menu = Template.bind({});
Menu.args = {
    menu: menu
};
