import { render, screen } from '@testing-library/react';

import Autocomplete from '.';

describe('Text', () => {
  it('should render', () => {
    render(<Autocomplete />);
    expect(screen.getByRole('heading', { name: /Boas vindas/i })).toBeInTheDocument();
  });
});
