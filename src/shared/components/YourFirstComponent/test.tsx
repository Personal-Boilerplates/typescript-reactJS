import React from 'react';
import { render } from '@testing-library/react';
import YourFirstComponent from '.';

describe('<YourFirstComponent />', () => {
  it('renders without crashing', () => {
    render(<YourFirstComponent />);
  });
});
