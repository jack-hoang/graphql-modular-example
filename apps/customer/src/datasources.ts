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
    return {
      id: id,
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
          number: '212-555-1212',
          type: 'home',
        },
        {
          number: '312-555-1212',
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
    };

    //return this.get<Customer>(`customers/${encodeURIComponent(id)}`);
  }
}
