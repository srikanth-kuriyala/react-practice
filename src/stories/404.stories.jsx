import React from 'react';

import { PageNotFound } from './404';

export default {
  title: 'Example/Page',
  component: PageNotFound,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <PageNotFound {...args} />;
export const NotFound = Template.bind({});
