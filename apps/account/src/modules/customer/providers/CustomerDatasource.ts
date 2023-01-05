import { RESTDataSource } from '@apollo/datasource-rest';
import { Injectable, Scope } from 'graphql-modules';

import { MembershipLevel } from '../../rewards/enums/MembershipLevel';
import { CustomerModule } from '../__generated__/module-types';

const randomId = () => Math.floor(Math.random() * 1000);

@Injectable({
  scope: Scope.Operation,
})
export class CustomerDatasource extends RESTDataSource {
  // override baseURL = 'https://account-api.example.com/';

  async getCustomerById(id: string, membershipLevel?: MembershipLevel): Promise<CustomerModule.Customer> {
    return {
      id: id,
      username: `user${id}`,
      accounts: [],
      membershipLevel,
    };

    //return this.get<Customer>(`customers/${encodeURIComponent(id)}`);
  }

  async getCustomersBylevel(membershipLevel: MembershipLevel): Promise<Array<CustomerModule.Customer>> {
    return [
      await this.getCustomerById(`${randomId()}`, membershipLevel),
      await this.getCustomerById(`${randomId()}`, membershipLevel),
      await this.getCustomerById(`${randomId()}`, membershipLevel),
    ];
  }
}
