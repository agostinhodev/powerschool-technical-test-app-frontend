import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';

import Autocomplete from '.';

jest.mock('axios');

describe('Autocomplete Component', () => {
  it('should render the input', () => {
    render(<Autocomplete />);
    expect(
      screen.getByPlaceholderText(/please enter the name of the country here/i),
    ).toBeInTheDocument();
  });

  it('should show country list when input has value', async () => {
    const mockResponse = {
      data: [
        { name: 'Canada', code: 'CA' },
        { name: 'United States', code: 'US' },
      ],
    };
    axios.get = jest.fn().mockResolvedValueOnce(mockResponse);

    render(<Autocomplete />);
    const inputElement = screen.getByPlaceholderText(/please enter the name of the country here/i);

    fireEvent.change(inputElement, { target: { value: 'ca' } });

    const listItem1 = await screen.findByText('Canada');
    const listItem2 = await screen.findByText('United States');

    expect(listItem1).toBeInTheDocument();
    expect(listItem2).toBeInTheDocument();
  });
});
