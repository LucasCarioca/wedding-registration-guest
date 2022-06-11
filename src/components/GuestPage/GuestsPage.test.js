import GuestPage from './GuestPage';
import React from 'react';
import {render, screen} from '@testing-library/react';
import {getAllGuests} from '../../services/guest.service';
import {getInvitation} from '../../services/invitation.service';
import {MemoryRouter} from 'react-router';
jest.mock('../services/guest.service', () => ({
  getAllGuests: jest.fn()
}));

jest.mock('../services/invitation.service', () => ({
  getInvitation: jest.fn()
}));

describe('GuestsPage component', function() {
  it('should render the component', async function() {
    getAllGuests.mockResolvedValue([]);
    getInvitation.mockResolvedValue([]);
    render(<MemoryRouter><GuestPage/></MemoryRouter>);
    expect((await screen.findAllByText(/Guests/)).length).toBeTruthy();
  });
});
