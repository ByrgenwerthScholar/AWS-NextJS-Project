/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      coachSub {
        items {
          id
          name
          subs
          createdAt
          updatedAt
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        coachSub {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCoach = /* GraphQL */ `
  query GetCoach($id: ID!) {
    getCoach(id: $id) {
      id
      name
      subs
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listCoaches = /* GraphQL */ `
  query ListCoaches(
    $filter: ModelCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subs
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const coachesByName = /* GraphQL */ `
  query CoachesByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coachesByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        subs
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
