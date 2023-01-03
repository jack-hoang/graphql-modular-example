import { RESTDataSource } from '@apollo/datasource-rest';
import { Injectable, Scope } from 'graphql-modules';

import { AccountModule } from '../__generated__/module-types';

const randomId = () => Math.floor(Math.random() * 1000);

@Injectable({
  scope: Scope.Operation,
})
export class AccountDatasource extends RESTDataSource {
  // override baseURL = 'https://account-api.example.com/';

  async getAccountById(id: string): Promise<AccountModule.Account> {
    return {
      id: id,
      accountNumber: 12345,
      balance: 1000.0,
      rewards: { id: `${id}-reward` },
    };

    //return this.get<Account>(`accounts/${encodeURIComponent(id)}`);
  }

  async getAccountsByCustomerId(customerId: string): Promise<Array<AccountModule.Account>> {
    return [
      await this.getAccountById(`${customerId}-1${randomId()}`),
      await this.getAccountById(`${customerId}-2${randomId()}`),
    ];
  }
}
