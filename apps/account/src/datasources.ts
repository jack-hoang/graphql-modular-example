import { RESTDataSource } from '@apollo/datasource-rest';

import { AccountModule } from './modules/account/__generated__/module-types';

export interface AccountDatasources {
  accountDatasource: AccountDatasource;
}

export const datasources = (): AccountDatasources => ({
  accountDatasource: new AccountDatasource(),
});

class AccountDatasource extends RESTDataSource {
  override baseURL = 'https://account-api.example.com/';

  async getAccountById(id: string): Promise<AccountModule.Account> {
    return {
      id: id,
      accountNumber: 12345,
      balance: 1000.0,
      rewards: { id: `${id}-reward` },
    };

    //return this.get<Account>(`accounts/${encodeURIComponent(id)}`);
  }
}
