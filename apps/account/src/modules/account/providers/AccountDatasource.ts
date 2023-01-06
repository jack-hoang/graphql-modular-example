import { RESTDataSource } from '@apollo/datasource-rest';
import { Injectable, Scope } from 'graphql-modules';

import { AccountModule } from '../__generated__/module-types';

@Injectable({
  scope: Scope.Operation,
})
export class AccountDatasource extends RESTDataSource {
  // override baseURL = 'https://account-api.example.com/';

  async getAccountById(id: string): Promise<AccountModule.Account> {
    const account = AccountMap.get(id);
    if (account) {
      return Promise.resolve(account);
    }
    return Promise.reject(`Unable to find account with ID ${id}`);

    //return this.get<Account>(`accounts/${encodeURIComponent(id)}`);
  }

  async getAccountsByCustomerId(customerId: string): Promise<Array<AccountModule.Account>> {
    const account = CustomerAccountMap.get(customerId);
    if (account) {
      return Promise.resolve(account);
    }
    return Promise.reject(`Unable to find accounts for customer ID ${customerId}`);
  }
}

// MOCK DATA

const AccountMap = new Map<string, AccountModule.Account>();
const CustomerAccountMap = new Map<string, Array<AccountModule.Account>>();

const customer1000Account1 = {
  id: '12345',
  accountNumber: 123456789,
  balance: 10000.0,
  rewards: {
    id: '987654321',
    pointsBalance: 30000,
  },
};
AccountMap.set(customer1000Account1.id, customer1000Account1);

const customer1000Account2 = {
  id: '23456',
  accountNumber: 234567890,
  balance: 5000.0,
  rewards: {
    id: '876543219',
    pointsBalance: 75000,
  },
};
AccountMap.set(customer1000Account2.id, customer1000Account2);

CustomerAccountMap.set('1000', [customer1000Account1, customer1000Account2]);

const customer1001Account1 = {
  id: '34567',
  accountNumber: 345678901,
  balance: 2000.0,
  rewards: {
    id: '765432198',
    pointsBalance: 9800,
  },
};
AccountMap.set(customer1001Account1.id, customer1001Account1);

CustomerAccountMap.set('1001', [customer1001Account1]);

const customer1002Account1 = {
  id: '45678',
  accountNumber: 456789012,
  balance: 1000.0,
  rewards: {
    id: '654321987',
    pointsBalance: 65000,
  },
};
AccountMap.set(customer1002Account1.id, customer1002Account1);
const customer1002Account2 = {
  id: '56789',
  accountNumber: 567890123,
  balance: 500.0,
  rewards: {
    id: '543219876',
    pointsBalance: 54000,
  },
};
AccountMap.set(customer1002Account2.id, customer1002Account2);

CustomerAccountMap.set('1002', [customer1002Account1, customer1002Account2]);

const customer1005Account1 = {
  id: '67890',
  accountNumber: 678901234,
  balance: 10000.0,
  rewards: {
    id: '432198765',
    pointsBalance: 43000,
  },
};
AccountMap.set(customer1005Account1.id, customer1005Account1);
CustomerAccountMap.set('1005', [customer1005Account1]);

const customer1006Account1 = {
  id: '78901',
  accountNumber: 789012345,
  balance: 50000.0,
  rewards: {
    id: '321987654',
    pointsBalance: 32000,
  },
};
AccountMap.set(customer1006Account1.id, customer1006Account1);
CustomerAccountMap.set('1006', [customer1006Account1]);
