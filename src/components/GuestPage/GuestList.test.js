import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import GuestList from './GuestList';
import {deleteGuest} from '../../services/guest.service';
jest.mock('../services/guest.service', () => ({
  deleteGuest: jest.fn()
}));

describe('guestList', function() {
  it('should load component', function() {
    const guests = [];
    const mockOnChange = jest.fn();
    expect(render(<GuestList list={guests} onChange={mockOnChange}/>)).toBeTruthy();
  });
  it('should show invitations in the component', function() {
    const guests = [{
      id: 12345,
      first_name: 'Lucas',
      last_name: 'Desouza',
      email: 'lucas@email.com',
      phone: '8115553155'
    }];
    const mockOnChange = jest.fn();
    render(<GuestList list={guests} onChange={mockOnChange}/>);
    expect(screen.getByText(guests[0].first_name)).toBeInTheDocument();
  });
  it('should show invitations in the component', async function() {
    deleteGuest.mockResolvedValue();
    const guests = [{
      id: 12345,
      first_name: 'Lucas',
      last_name: 'Desouza',
      email: 'lucas@email.com',
      phone: '8115553155'
    }];
    const mockOnChange = jest.fn();
    render(<GuestList list={guests} onChange={mockOnChange}/>);
    expect(screen.getByTestId('deleteButton-disabled')).toBeInTheDocument();
    screen.getByText(guests[0].first_name).click();
    const deleteButton = await screen.findByTestId('deleteButton');
    expect(deleteButton).toBeInTheDocument();
    deleteButton.click();
    expect(deleteGuest).toHaveBeenCalledWith(guests[0].id);
    await waitFor(function() {
      expect(mockOnChange).toHaveBeenCalled();
    });
  });
});
