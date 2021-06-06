import React from 'react';
import { Meta, Story } from 'shared/types/StoryBookCustomTypes';
import YourFirstComponent from '.';
import * as T from './types';

export default {
  title: 'YourFirstComponent',
  component: YourFirstComponent,
} as Meta;

export const Template: Story<T.YourFirstComponentPropsType> = (args) => (
  <YourFirstComponent {...args} />
);
