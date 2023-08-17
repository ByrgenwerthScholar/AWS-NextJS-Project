/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onCreateStudent(filter: $filter, owner: $owner) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onUpdateStudent(filter: $filter, owner: $owner) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onDeleteStudent(filter: $filter, owner: $owner) {
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
export const onCreateCoach = /* GraphQL */ `
  subscription OnCreateCoach(
    $filter: ModelSubscriptionCoachFilterInput
    $owner: String
  ) {
    onCreateCoach(filter: $filter, owner: $owner) {
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
export const onUpdateCoach = /* GraphQL */ `
  subscription OnUpdateCoach(
    $filter: ModelSubscriptionCoachFilterInput
    $owner: String
  ) {
    onUpdateCoach(filter: $filter, owner: $owner) {
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
export const onDeleteCoach = /* GraphQL */ `
  subscription OnDeleteCoach(
    $filter: ModelSubscriptionCoachFilterInput
    $owner: String
  ) {
    onDeleteCoach(filter: $filter, owner: $owner) {
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
