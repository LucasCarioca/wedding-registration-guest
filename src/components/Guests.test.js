import Guests from './Guests';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {getAllGuests} from '../services/guest.service';
jest.mock('../services/guest.service', () => ({
  getAllGuests: jest.fn()
}));

describe('invitations component', function() {
  it('should render the component', async function() {
    getAllGuests.mockResolvedValueOnce([]);
    render(<Guests/>);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
    expect(await screen.findByText(/Guests/)).toBeInTheDocument();
  });
});
