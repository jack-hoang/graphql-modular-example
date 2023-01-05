/* eslint-disable */
import { MembershipLevel } from '../modules/rewards/enums/MembershipLevel';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type Account = {
  __typename?: 'Account';
  accountNumber: Scalars['Int'];
  balance?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  rewards?: Maybe<Rewards>;
};

export type Customer = {
  __typename?: 'Customer';
  accounts: Array<Account>;
  id: Scalars['ID'];
  membershipLevel?: Maybe<MembershipLevel>;
  username: Scalars['String'];
};

export type CustomersByLevelConnection = {
  __typename?: 'CustomersByLevelConnection';
  edges?: Maybe<Array<Maybe<CustomersByLevelEdge>>>;
  total: Scalars['Int'];
};

export type CustomersByLevelEdge = {
  __typename?: 'CustomersByLevelEdge';
  node?: Maybe<CustomersByLevelNode>;
};

export type CustomersByLevelInput = {
  membershipLevel: MembershipLevel;
};

export type CustomersByLevelNode = {
  __typename?: 'CustomersByLevelNode';
  customer?: Maybe<Customer>;
};

export type CustomersByLevelResponse = CustomersByLevelConnection | ResponseError;

export { MembershipLevel };

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  customersByLevel?: Maybe<CustomersByLevelResponse>;
};

export type QueryAccountArgs = {
  id: Scalars['ID'];
};

export type QueryCustomersByLevelArgs = {
  input: CustomersByLevelInput;
};

export type ResponseError = {
  __typename?: 'ResponseError';
  code: Scalars['String'];
  httpStatus?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type Rewards = {
  __typename?: 'Rewards';
  id: Scalars['ID'];
  pointsBalance?: Maybe<Scalars['Float']>;
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
  Account: ResolverTypeWrapper<Account>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomersByLevelConnection: ResolverTypeWrapper<CustomersByLevelConnection>;
  CustomersByLevelEdge: ResolverTypeWrapper<CustomersByLevelEdge>;
  CustomersByLevelInput: CustomersByLevelInput;
  CustomersByLevelNode: ResolverTypeWrapper<CustomersByLevelNode>;
  CustomersByLevelResponse: ResolversTypes['CustomersByLevelConnection'] | ResolversTypes['ResponseError'];
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  MembershipLevel: MembershipLevel;
  Query: ResolverTypeWrapper<{}>;
  ResponseError: ResolverTypeWrapper<ResponseError>;
  Rewards: ResolverTypeWrapper<Rewards>;
  String: ResolverTypeWrapper<Scalars['String']>;
  _FieldSet: ResolverTypeWrapper<Scalars['_FieldSet']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Account: Account;
  Boolean: Scalars['Boolean'];
  Customer: Customer;
  CustomersByLevelConnection: CustomersByLevelConnection;
  CustomersByLevelEdge: CustomersByLevelEdge;
  CustomersByLevelInput: CustomersByLevelInput;
  CustomersByLevelNode: CustomersByLevelNode;
  CustomersByLevelResponse: ResolversParentTypes['CustomersByLevelConnection'] | ResolversParentTypes['ResponseError'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Query: {};
  ResponseError: ResponseError;
  Rewards: Rewards;
  String: Scalars['String'];
  _FieldSet: Scalars['_FieldSet'];
}>;

export type ExtendsDirectiveArgs = {};

export type ExtendsDirectiveResolver<
  Result,
  Parent,
  ContextType = GraphQLModules.Context,
  Args = ExtendsDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExternalDirectiveArgs = {};

export type ExternalDirectiveResolver<
  Result,
  Parent,
  ContextType = GraphQLModules.Context,
  Args = ExternalDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type InaccessibleDirectiveArgs = {};

export type InaccessibleDirectiveResolver<
  Result,
  Parent,
  ContextType = GraphQLModules.Context,
  Args = InaccessibleDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type KeyDirectiveArgs = {
  fields: Scalars['_FieldSet'];
  resolvable?: Maybe<Scalars['Boolean']>;
};

export type KeyDirectiveResolver<
  Result,
  Parent,
  ContextType = GraphQLModules.Context,
  Args = KeyDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type OverrideDirectiveArgs = {
  from: Scalars['String'];
};

export type OverrideDirectiveResolver<
  Result,
  Parent,
  ContextType = GraphQLModules.Context,
  Args = OverrideDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ProvidesDirectiveArgs = {
  fields: Scalars['_FieldSet'];
};

export type ProvidesDirectiveResolver<
  Result,
  Parent,
  ContextType = GraphQLModules.Context,
  Args = ProvidesDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RequiresDirectiveArgs = {
  fields: Scalars['_FieldSet'];
};

export type RequiresDirectiveResolver<
  Result,
  Parent,
  ContextType = GraphQLModules.Context,
  Args = RequiresDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ShareableDirectiveArgs = {};

export type ShareableDirectiveResolver<
  Result,
  Parent,
  ContextType = GraphQLModules.Context,
  Args = ShareableDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TagDirectiveArgs = {
  name: Scalars['String'];
};

export type TagDirectiveResolver<
  Result,
  Parent,
  ContextType = GraphQLModules.Context,
  Args = TagDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<
  ContextType = GraphQLModules.Context,
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = ResolversObject<{
  accountNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  balance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  rewards?: Resolver<Maybe<ResolversTypes['Rewards']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomerResolvers<
  ContextType = GraphQLModules.Context,
  ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer'],
> = ResolversObject<{
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  membershipLevel?: Resolver<Maybe<ResolversTypes['MembershipLevel']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomersByLevelConnectionResolvers<
  ContextType = GraphQLModules.Context,
  ParentType extends ResolversParentTypes['CustomersByLevelConnection'] = ResolversParentTypes['CustomersByLevelConnection'],
> = ResolversObject<{
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['CustomersByLevelEdge']>>>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomersByLevelEdgeResolvers<
  ContextType = GraphQLModules.Context,
  ParentType extends ResolversParentTypes['CustomersByLevelEdge'] = ResolversParentTypes['CustomersByLevelEdge'],
> = ResolversObject<{
  node?: Resolver<Maybe<ResolversTypes['CustomersByLevelNode']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomersByLevelNodeResolvers<
  ContextType = GraphQLModules.Context,
  ParentType extends ResolversParentTypes['CustomersByLevelNode'] = ResolversParentTypes['CustomersByLevelNode'],
> = ResolversObject<{
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomersByLevelResponseResolvers<
  ContextType = GraphQLModules.Context,
  ParentType extends ResolversParentTypes['CustomersByLevelResponse'] = ResolversParentTypes['CustomersByLevelResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'CustomersByLevelConnection' | 'ResponseError', ParentType, ContextType>;
}>;

export type MembershipLevelResolvers = EnumResolverSignature<
  { GOLD?: any; PLATINUM?: any; SILVER?: any },
  ResolversTypes['MembershipLevel']
>;

export type QueryResolvers<
  ContextType = GraphQLModules.Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id'>>;
  customersByLevel?: Resolver<
    Maybe<ResolversTypes['CustomersByLevelResponse']>,
    ParentType,
    ContextType,
    RequireFields<QueryCustomersByLevelArgs, 'input'>
  >;
}>;

export type ResponseErrorResolvers<
  ContextType = GraphQLModules.Context,
  ParentType extends ResolversParentTypes['ResponseError'] = ResolversParentTypes['ResponseError'],
> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  httpStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RewardsResolvers<
  ContextType = GraphQLModules.Context,
  ParentType extends ResolversParentTypes['Rewards'] = ResolversParentTypes['Rewards'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pointsBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface _FieldSetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['_FieldSet'], any> {
  name: '_FieldSet';
}

export type Resolvers<ContextType = GraphQLModules.Context> = ResolversObject<{
  Account?: AccountResolvers<ContextType>;
  Customer?: CustomerResolvers<ContextType>;
  CustomersByLevelConnection?: CustomersByLevelConnectionResolvers<ContextType>;
  CustomersByLevelEdge?: CustomersByLevelEdgeResolvers<ContextType>;
  CustomersByLevelNode?: CustomersByLevelNodeResolvers<ContextType>;
  CustomersByLevelResponse?: CustomersByLevelResponseResolvers<ContextType>;
  MembershipLevel?: MembershipLevelResolvers;
  Query?: QueryResolvers<ContextType>;
  ResponseError?: ResponseErrorResolvers<ContextType>;
  Rewards?: RewardsResolvers<ContextType>;
  _FieldSet?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = GraphQLModules.Context> = ResolversObject<{
  extends?: ExtendsDirectiveResolver<any, any, ContextType>;
  external?: ExternalDirectiveResolver<any, any, ContextType>;
  inaccessible?: InaccessibleDirectiveResolver<any, any, ContextType>;
  key?: KeyDirectiveResolver<any, any, ContextType>;
  override?: OverrideDirectiveResolver<any, any, ContextType>;
  provides?: ProvidesDirectiveResolver<any, any, ContextType>;
  requires?: RequiresDirectiveResolver<any, any, ContextType>;
  shareable?: ShareableDirectiveResolver<any, any, ContextType>;
  tag?: TagDirectiveResolver<any, any, ContextType>;
}>;

export type _FieldSet = Scalars['_FieldSet'];
