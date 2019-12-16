import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import { HelloWorld } from '../src';

test('should render the component', () => {
   const { queryByText } = render(<HelloWorld />);
   expect(queryByText('Hello World')).toBeTruthy();
});
