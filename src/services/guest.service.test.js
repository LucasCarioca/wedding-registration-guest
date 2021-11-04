jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  delete: jest.fn()
}));
import axios from 'axios';
import {createGuest, deleteGuest, getAllGuests} from './guest.service';

describe('guest.service', function() {
  it('should get all guests for the invitation', async function() {
    const expectedData = [{fake: 'data'}];
    axios.get.mockResolvedValueOnce({data: expectedData});
    const data = await getAllGuests();
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8081/api/v1/guests?registration_key=null');
    expect(data).toEqual(expectedData);
  });
  it('should create a guest', function() {
    const expectedFirstName = 'testFirstName';
    const expectedLastName = 'testLastName';
    const expectedEmail = 'lucas@mail.com';
    const expectedPhone = '8115553126'
    axios.post.mockResolvedValueOnce({data: {}});
    createGuest(expectedFirstName, expectedLastName, expectedEmail, expectedPhone);
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8081/api/v1/guests?registration_key=null', {
      first_name: expectedFirstName,
      last_name: expectedLastName,
      email: expectedEmail,
      phone: expectedPhone
    });
  });
  it('should create a guest', function() {
    const expectedId = 1;
    axios.delete.mockResolvedValueOnce({data: {}});
    deleteGuest(expectedId);
    expect(axios.delete).toHaveBeenCalledWith(`http://localhost:8081/api/v1/guests/${expectedId}?registration_key=null`);
  });
});
