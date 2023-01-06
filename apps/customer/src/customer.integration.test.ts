import { startStandaloneServer } from '@apollo/server/standalone';
import request from 'supertest';

import { CustomerContext } from './CustomerContext';
import { server } from './server';

describe('When retrieving a single customer by ID', () => {
  let url: string;

  beforeAll(async () => {
    ({ url } = await startStandaloneServer(server, {
      context: async ({ req }) => {
        return new CustomerContext({ req, server });
      },
      listen: { port: 0 },
    }));
  });

  afterAll(async () => {
    server.stop();
  });

  it('should return a valid customer if the customer ID is valid', async () => {
    // given

    const query = `
query Customer($customerId: ID!) {
  customer(id: $customerId) {
    id
    username
    givenName
    surname
    gender
    addresses {
      street
      city
      state
      zip
    }
    phones {
      number
      type
    }
    emails {
      address
      type
    }
  }
}
    `;

    const expected = {
      customer: {
        id: '1001',
        username: 'alice.smith',
        givenName: 'Alice',
        surname: 'Smith',
        gender: 'female',
        addresses: [
          {
            street: '111 Main St',
            city: 'San Francisco',
            state: 'CA',
            zip: '94111',
          },
        ],
        phones: [
          {
            number: '415-555-1001',
            type: 'home',
          },
          {
            number: '213-555-1001',
            type: 'work',
          },
        ],
        emails: [
          {
            address: 'alice.smith@example.com',
            type: 'personal',
          },
          {
            address: 'alice.smith@company.com',
            type: 'work',
          },
        ],
      },
    };

    // when

    const response = await request(url)
      .post('/graphql')
      .send({
        query,
        variables: {
          customerId: '1001',
        },
      });

    // then
    const { data } = response.body;
    expect(data).toEqual(expected);
  });
});
