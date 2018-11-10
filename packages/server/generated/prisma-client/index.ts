// Code generated by Prisma (prisma@1.20.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode, GraphQLSchema } from "graphql";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  popup: (where?: PopupWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  popup: (where: PopupWhereUniqueInput) => PopupPromise;
  popups: (
    args?: {
      where?: PopupWhereInput;
      orderBy?: PopupOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Popup>;
  popupsConnection: (
    args?: {
      where?: PopupWhereInput;
      orderBy?: PopupOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PopupConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPopup: (data: PopupCreateInput) => PopupPromise;
  updatePopup: (
    args: { data: PopupUpdateInput; where: PopupWhereUniqueInput }
  ) => PopupPromise;
  updateManyPopups: (
    args: { data: PopupUpdateManyMutationInput; where?: PopupWhereInput }
  ) => BatchPayloadPromise;
  upsertPopup: (
    args: {
      where: PopupWhereUniqueInput;
      create: PopupCreateInput;
      update: PopupUpdateInput;
    }
  ) => PopupPromise;
  deletePopup: (where: PopupWhereUniqueInput) => PopupPromise;
  deleteManyPopups: (where?: PopupWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  popup: (
    where?: PopupSubscriptionWhereInput
  ) => PopupSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PopupOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "elementId_ASC"
  | "elementId_DESC"
  | "URL_ASC"
  | "URL_DESC"
  | "name_ASC"
  | "name_DESC"
  | "text_ASC"
  | "text_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface PopupCreateInput {
  elementId: ID_Input;
  URL?: String;
  name: String;
  text?: String;
}

export interface PopupUpdateInput {
  elementId?: ID_Input;
  URL?: String;
  name?: String;
  text?: String;
}

export interface PopupUpdateManyMutationInput {
  elementId?: ID_Input;
  URL?: String;
  name?: String;
  text?: String;
}

export interface PopupWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  elementId?: ID_Input;
  elementId_not?: ID_Input;
  elementId_in?: ID_Input[] | ID_Input;
  elementId_not_in?: ID_Input[] | ID_Input;
  elementId_lt?: ID_Input;
  elementId_lte?: ID_Input;
  elementId_gt?: ID_Input;
  elementId_gte?: ID_Input;
  elementId_contains?: ID_Input;
  elementId_not_contains?: ID_Input;
  elementId_starts_with?: ID_Input;
  elementId_not_starts_with?: ID_Input;
  elementId_ends_with?: ID_Input;
  elementId_not_ends_with?: ID_Input;
  URL?: String;
  URL_not?: String;
  URL_in?: String[] | String;
  URL_not_in?: String[] | String;
  URL_lt?: String;
  URL_lte?: String;
  URL_gt?: String;
  URL_gte?: String;
  URL_contains?: String;
  URL_not_contains?: String;
  URL_starts_with?: String;
  URL_not_starts_with?: String;
  URL_ends_with?: String;
  URL_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  AND?: PopupWhereInput[] | PopupWhereInput;
  OR?: PopupWhereInput[] | PopupWhereInput;
  NOT?: PopupWhereInput[] | PopupWhereInput;
}

export interface PopupSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PopupWhereInput;
  AND?: PopupSubscriptionWhereInput[] | PopupSubscriptionWhereInput;
  OR?: PopupSubscriptionWhereInput[] | PopupSubscriptionWhereInput;
  NOT?: PopupSubscriptionWhereInput[] | PopupSubscriptionWhereInput;
}

export type PopupWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregatePopup {
  count: Int;
}

export interface AggregatePopupPromise
  extends Promise<AggregatePopup>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePopupSubscription
  extends Promise<AsyncIterator<AggregatePopup>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PopupPreviousValues {
  id: ID_Output;
  elementId: ID_Output;
  URL?: String;
  name: String;
  text?: String;
}

export interface PopupPreviousValuesPromise
  extends Promise<PopupPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  elementId: () => Promise<ID_Output>;
  URL: () => Promise<String>;
  name: () => Promise<String>;
  text: () => Promise<String>;
}

export interface PopupPreviousValuesSubscription
  extends Promise<AsyncIterator<PopupPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  elementId: () => Promise<AsyncIterator<ID_Output>>;
  URL: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  text: () => Promise<AsyncIterator<String>>;
}

export interface PopupEdge {
  cursor: String;
}

export interface PopupEdgePromise extends Promise<PopupEdge>, Fragmentable {
  node: <T = Popup>() => T;
  cursor: () => Promise<String>;
}

export interface PopupEdgeSubscription
  extends Promise<AsyncIterator<PopupEdge>>,
    Fragmentable {
  node: <T = PopupSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PopupSubscriptionPayload {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PopupSubscriptionPayloadPromise
  extends Promise<PopupSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Popup>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PopupPreviousValues>() => T;
}

export interface PopupSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PopupSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PopupSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PopupPreviousValuesSubscription>() => T;
}

export interface Popup {
  id: ID_Output;
  elementId: ID_Output;
  URL?: String;
  name: String;
  text?: String;
}

export interface PopupPromise extends Promise<Popup>, Fragmentable {
  id: () => Promise<ID_Output>;
  elementId: () => Promise<ID_Output>;
  URL: () => Promise<String>;
  name: () => Promise<String>;
  text: () => Promise<String>;
}

export interface PopupSubscription
  extends Promise<AsyncIterator<Popup>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  elementId: () => Promise<AsyncIterator<ID_Output>>;
  URL: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  text: () => Promise<AsyncIterator<String>>;
}

export interface PopupConnection {}

export interface PopupConnectionPromise
  extends Promise<PopupConnection>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = FragmentableArray<PopupEdge>>() => T;
  aggregate: <T = AggregatePopup>() => T;
}

export interface PopupConnectionSubscription
  extends Promise<AsyncIterator<PopupConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PopupEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePopupSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  endpoint: `https://us1.prisma.sh/colombini-c4ed8c/prisma-api-boilerplate/dev`
});
export const prisma = new Prisma();
