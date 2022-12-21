/* eslint-disable */
import { CustomerContext } from '../CustomerContext';
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddCustomerInput = {
  addresses?: InputMaybe<Array<AddressInput>>;
  emails?: InputMaybe<Array<EmailInput>>;
  gender?: InputMaybe<Scalars['String']>;
  givenName: Scalars['String'];
  phones?: InputMaybe<Array<PhoneInput>>;
  surname: Scalars['String'];
  username: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
  zip: Scalars['String'];
};

export type AddressInput = {
  city: Scalars['String'];
  state: Scalars['String'];
  street: Scalars['String'];
  zip: Scalars['String'];
};

export type Customer = {
  __typename?: 'Customer';
  addresses?: Maybe<Array<Maybe<Address>>>;
  emails?: Maybe<Array<Maybe<Email>>>;
  gender: Scalars['String'];
  givenName: Scalars['String'];
  id: Scalars['ID'];
  phones?: Maybe<Array<Maybe<Phone>>>;
  surname: Scalars['String'];
  username: Scalars['String'];
};

export type Email = {
  __typename?: 'Email';
  address: Scalars['String'];
  type: Scalars['String'];
};

export type EmailInput = {
  address: Scalars['String'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCustomer?: Maybe<Customer>;
};

export type MutationAddCustomerArgs = {
  input?: InputMaybe<AddCustomerInput>;
};

export type Phone = {
  __typename?: 'Phone';
  number: Scalars['String'];
  type: Scalars['String'];
};

export type PhoneInput = {
  number: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  customer?: Maybe<Customer>;
};

export type QueryCustomerArgs = {
  id: Scalars['ID'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddCustomerInput: AddCustomerInput;
  Address: ResolverTypeWrapper<Address>;
  AddressInput: AddressInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Customer: ResolverTypeWrapper<Customer>;
  Email: ResolverTypeWrapper<Email>;
  EmailInput: EmailInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  Phone: ResolverTypeWrapper<Phone>;
  PhoneInput: PhoneInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddCustomerInput: AddCustomerInput;
  Address: Address;
  AddressInput: AddressInput;
  Boolean: Scalars['Boolean'];
  Customer: Customer;
  Email: Email;
  EmailInput: EmailInput;
  ID: Scalars['ID'];
  Mutation: {};
  Phone: Phone;
  PhoneInput: PhoneInput;
  Query: {};
  String: Scalars['String'];
}>;

export type AddressResolvers<
  ContextType = CustomerContext,
  ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address'],
> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerResolvers<
  ContextType = CustomerContext,
  ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer'],
> = ResolversObject<{
  addresses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>;
  emails?: Resolver<Maybe<Array<Maybe<ResolversTypes['Email']>>>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  givenName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  phones?: Resolver<Maybe<Array<Maybe<ResolversTypes['Phone']>>>, ParentType, ContextType>;
  surname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmailResolvers<
  ContextType = CustomerContext,
  ParentType extends ResolversParentTypes['Email'] = ResolversParentTypes['Email'],
> = ResolversObject<{
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = CustomerContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
  addCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, Partial<MutationAddCustomerArgs>>;
}>;

export type PhoneResolvers<
  ContextType = CustomerContext,
  ParentType extends ResolversParentTypes['Phone'] = ResolversParentTypes['Phone'],
> = ResolversObject<{
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = CustomerContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  customer?: Resolver<
    Maybe<ResolversTypes['Customer']>,
    ParentType,
    ContextType,
    RequireFields<QueryCustomerArgs, 'id'>
  >;
}>;

export type Resolvers<ContextType = CustomerContext> = ResolversObject<{
  Address?: AddressResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  Email?: EmailResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Phone?: PhoneResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;
