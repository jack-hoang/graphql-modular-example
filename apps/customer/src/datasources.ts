import { RESTDataSource } from '@apollo/datasource-rest';

import { Customer } from './__generated__/resolvers-types';

export interface CustomerDatasources {
  customerDatasource: CustomerDatasource;
}

export const datasources = (): CustomerDatasources => ({
  customerDatasource: new CustomerDatasource(),
});

class CustomerDatasource extends RESTDataSource {
  override baseURL = 'https://customer-api.example.com/';

  async getCustomerById(id: string): Promise<Customer> {
    const customer = MockCustomers.get(id);
    if (customer) {
      return Promise.resolve(customer);
    }
    return Promise.reject(`Unable to find customer with ID ${id}`);

    //return this.get<Customer>(`customers/${encodeURIComponent(id)}`);
  }
}

// MOCK DATA

const MockCustomers = new Map<string, Customer>();
MockCustomers.set('1000', {
  id: '1000',
  username: 'jane.doe',
  givenName: 'Jane',
  surname: 'Doe',
  gender: 'female',
  addresses: [
    {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
    {
      street: '456 Oak Ave',
      city: 'Chicago',
      state: 'IL',
      zip: '60606',
    },
  ],
  phones: [
    {
      number: '212-555-1000',
      type: 'home',
    },
    {
      number: '312-555-1000',
      type: 'work',
    },
  ],
  emails: [
    {
      address: 'jane.doe@example.com',
      type: 'personal',
    },
    {
      address: 'jane.doe@company.com',
      type: 'work',
    },
  ],
});

MockCustomers.set('1001', {
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
});

MockCustomers.set('1002', {
  id: '1002',
  username: 'michael.brown',
  givenName: 'Michael',
  surname: 'Brown',
  gender: 'male',
  addresses: [
    {
      street: '444 Main St',
      city: 'Boston',
      state: 'MA',
      zip: '02222',
    },
    {
      street: '555 Oak Ave',
      city: 'Newark',
      state: 'NJ',
      zip: '07101',
    },
  ],
  phones: [
    {
      number: '617-555-1212',
      type: 'home',
    },
    {
      number: '973-555-1212',
      type: 'work',
    },
  ],
  emails: [
    {
      address: 'michael.brown@example.com',
      type: 'personal',
    },
    {
      address: 'michael.brown@company.com',
      type: 'work',
    },
  ],
});

MockCustomers.set('1005', {
  id: '1005',
  username: 'jennifer.davis',
  givenName: 'Jennifer',
  surname: 'Davis',
  gender: 'female',
  addresses: [
    {
      street: '666 Main St',
      city: 'Houston',
      state: 'TX',
      zip: '77777',
    },
  ],
  phones: [
    {
      number: '713-555-1212',
      type: 'home',
    },
  ],
  emails: [
    {
      address: 'jennifer.davis@example.com',
      type: 'personal',
    },
  ],
});

MockCustomers.set('1006', {
  id: '1006',
  username: 'david.williams',
  givenName: 'David',
  surname: 'Williams',
  gender: 'male',
  addresses: [
    {
      street: '777 Main St',
      city: 'Philadelphia',
      state: 'PA',
      zip: '19019',
    },
    {
      street: '888 Oak Ave',
      city: 'Pittsburgh',
      state: 'PA',
      zip: '15222',
    },
  ],
  phones: [
    {
      number: '215-555-1212',
      type: 'home',
    },
    {
      number: '412-555-1212',
      type: 'work',
    },
  ],
  emails: [
    {
      address: 'david.williams@example.com',
      type: 'personal',
    },
    {
      address: 'david.williams@company.com',
      type: 'work',
    },
  ],
});
