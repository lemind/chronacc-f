/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateTaskInputs = {
  timeframes: Array<TimeframeInput>;
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: TaskEntity;
  updateTask: TaskEntity;
};


export type MutationCreateTaskArgs = {
  taskData: CreateTaskInputs;
};


export type MutationUpdateTaskArgs = {
  taskData: UpdateTaskInputs;
};

export type Query = {
  __typename?: 'Query';
  user: UserEntity;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

/** Task */
export type TaskEntity = {
  __typename?: 'TaskEntity';
  id: Scalars['ID']['output'];
  timeframes: Array<Timeframe>;
  title: Scalars['String']['output'];
};

export type TaskInput = {
  id: Scalars['ID']['input'];
  timeframes: Array<TimeframeInput>;
  title: Scalars['String']['input'];
};

/** Timeframe */
export type Timeframe = {
  __typename?: 'Timeframe';
  begin: Scalars['Float']['output'];
  end?: Maybe<Scalars['Float']['output']>;
};

export type TimeframeInput = {
  begin: Scalars['Float']['input'];
  end?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateTaskInputs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  timeframes?: InputMaybe<Array<TimeframeInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** User */
export type UserEntity = {
  __typename?: 'UserEntity';
  creationDate: Scalars['DateTime']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
};

export type CreateTaskMutationVariables = Exact<{
  taskData: CreateTaskInputs;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'TaskEntity', id: string, title: string, timeframes: Array<{ __typename?: 'Timeframe', begin: number, end?: number | null }> } };

export type UpdateTaskMutationVariables = Exact<{
  taskData: UpdateTaskInputs;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'TaskEntity', id: string, title: string, timeframes: Array<{ __typename?: 'Timeframe', begin: number, end?: number | null }> } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', user: { __typename?: 'UserEntity', id: string, firstName?: string | null, lastName?: string | null, creationDate: any } };


export const CreateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaskInputs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"taskData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"timeframes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timeframe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"begin"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateTaskMutation, CreateTaskMutationVariables>;
export const UpdateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTaskInputs"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"taskData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"timeframes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timeframe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"begin"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"1","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
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
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  CreateTaskInputs: CreateTaskInputs;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  TaskEntity: ResolverTypeWrapper<TaskEntity>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  TaskInput: TaskInput;
  Timeframe: ResolverTypeWrapper<Timeframe>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  TimeframeInput: TimeframeInput;
  UpdateTaskInputs: UpdateTaskInputs;
  UserEntity: ResolverTypeWrapper<UserEntity>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  CreateTaskInputs: CreateTaskInputs;
  String: Scalars['String']['output'];
  DateTime: Scalars['DateTime']['output'];
  Mutation: {};
  Query: {};
  TaskEntity: TaskEntity;
  ID: Scalars['ID']['output'];
  TaskInput: TaskInput;
  Timeframe: Timeframe;
  Float: Scalars['Float']['output'];
  TimeframeInput: TimeframeInput;
  UpdateTaskInputs: UpdateTaskInputs;
  UserEntity: UserEntity;
  Boolean: Scalars['Boolean']['output'];
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createTask?: Resolver<ResolversTypes['TaskEntity'], ParentType, ContextType, RequireFields<MutationCreateTaskArgs, 'taskData'>>;
  updateTask?: Resolver<ResolversTypes['TaskEntity'], ParentType, ContextType, RequireFields<MutationUpdateTaskArgs, 'taskData'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  user?: Resolver<ResolversTypes['UserEntity'], ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
};

export type TaskEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskEntity'] = ResolversParentTypes['TaskEntity']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timeframes?: Resolver<Array<ResolversTypes['Timeframe']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimeframeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Timeframe'] = ResolversParentTypes['Timeframe']> = {
  begin?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEntityResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEntity'] = ResolversParentTypes['UserEntity']> = {
  creationDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TaskEntity?: TaskEntityResolvers<ContextType>;
  Timeframe?: TimeframeResolvers<ContextType>;
  UserEntity?: UserEntityResolvers<ContextType>;
};

