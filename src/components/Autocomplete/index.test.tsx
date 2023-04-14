import { render } from '@testing-library/react';

import Autocomplete from '.';

test('renders input element', () => {
  const { getByPlaceholderText } = render(<Autocomplete />);
  const inputElement = getByPlaceholderText(/please enter the name of the country here/i);
  expect(inputElement).toBeInTheDocument();
});
