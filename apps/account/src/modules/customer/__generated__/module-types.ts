/* eslint-disable */
import * as Types from '../../../__generated__/graphql';
import * as gm from 'graphql-modules';
export namespace CustomerModule {
  interface DefinedFields {
    Query: 'customersByLevel';
    ResponseError: 'code' | 'httpStatus' | 'message';
    Customer: 'id' | 'username' | 'accounts' | 'membershipLevel';
    CustomersByLevelConnection: 'total' | 'edges';
    CustomersByLevelEdge: 'node';
    CustomersByLevelNode: 'customer';
  }

  interface DefinedEnumValues {
    MembershipLevel: 'SILVER' | 'GOLD' | 'PLATINUM';
  }

  interface DefinedInputFields {
    CustomersByLevelInput: 'membershipLevel';
  }

  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type CustomersByLevelResponse = Types.CustomersByLevelResponse;
  export type CustomersByLevelInput = Pick<Types.CustomersByLevelInput, DefinedInputFields['CustomersByLevelInput']>;
  export type ResponseError = Pick<Types.ResponseError, DefinedFields['ResponseError']>;
  export type CustomersByLevelConnection = Pick<
    Types.CustomersByLevelConnection,
    DefinedFields['CustomersByLevelConnection']
  >;
  export type Customer = Pick<Types.Customer, DefinedFields['Customer']>;
  export type Account = Types.Account;
  export type MembershipLevel = DefinedEnumValues['MembershipLevel'];
  export type CustomersByLevelEdge = Pick<Types.CustomersByLevelEdge, DefinedFields['CustomersByLevelEdge']>;
  export type CustomersByLevelNode = Pick<Types.CustomersByLevelNode, DefinedFields['CustomersByLevelNode']>;

  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type ResponseErrorResolvers = Pick<
    Types.ResponseErrorResolvers,
    DefinedFields['ResponseError'] | '__isTypeOf'
  >;
  export type CustomerResolvers = Pick<Types.CustomerResolvers, DefinedFields['Customer'] | '__isTypeOf'>;
  export type CustomersByLevelConnectionResolvers = Pick<
    Types.CustomersByLevelConnectionResolvers,
    DefinedFields['CustomersByLevelConnection'] | '__isTypeOf'
  >;
  export type CustomersByLevelEdgeResolvers = Pick<
    Types.CustomersByLevelEdgeResolvers,
    DefinedFields['CustomersByLevelEdge'] | '__isTypeOf'
  >;
  export type CustomersByLevelNodeResolvers = Pick<
    Types.CustomersByLevelNodeResolvers,
    DefinedFields['CustomersByLevelNode'] | '__isTypeOf'
  >;

  export interface Resolvers {
    Query?: QueryResolvers;
    ResponseError?: ResponseErrorResolvers;
    Customer?: CustomerResolvers;
    CustomersByLevelConnection?: CustomersByLevelConnectionResolvers;
    CustomersByLevelEdge?: CustomersByLevelEdgeResolvers;
    CustomersByLevelNode?: CustomersByLevelNodeResolvers;
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      customersByLevel?: gm.Middleware[];
    };
    ResponseError?: {
      '*'?: gm.Middleware[];
      code?: gm.Middleware[];
      httpStatus?: gm.Middleware[];
      message?: gm.Middleware[];
    };
    Customer?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      username?: gm.Middleware[];
      accounts?: gm.Middleware[];
      membershipLevel?: gm.Middleware[];
    };
    CustomersByLevelConnection?: {
      '*'?: gm.Middleware[];
      total?: gm.Middleware[];
      edges?: gm.Middleware[];
    };
    CustomersByLevelEdge?: {
      '*'?: gm.Middleware[];
      node?: gm.Middleware[];
    };
    CustomersByLevelNode?: {
      '*'?: gm.Middleware[];
      customer?: gm.Middleware[];
    };
  }
}
