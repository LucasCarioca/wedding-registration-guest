jest.mock('axios', () => ({
  get: jest.fn()
}));
import axios from 'axios';
import {getInvitation} from './invitation.service';

describe('invitation.service', function() {
  it('should get all invitations', async function() {
    const expectedData = {fake: 'data'};
    axios.get.mockResolvedValueOnce({data: expectedData});
    const data = await getInvitation();
    expect(axios.get).toHaveBeenCalledWith('http://localhost:8081/api/v1/invitations?registration_key=null');
    expect(data).toEqual(expectedData);
  });
});
