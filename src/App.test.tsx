import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {

  it('should render without crashing', () => {
    const context = render(<App />);

    expect(context.container).toBeInstanceOf(Object);
  });

});