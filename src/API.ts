/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudentInput = {
  id?: string | null,
  name: string,
};

export type ModelStudentConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  name: string,
  coachSub?: ModelCoachConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCoachConnection = {
  __typename: "ModelCoachConnection",
  items:  Array<Coach | null >,
  nextToken?: string | null,
};

export type Coach = {
  __typename: "Coach",
  id: string,
  name: string,
  subs: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateStudentInput = {
  id: string,
  name?: string | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type CreateCoachInput = {
  id?: string | null,
  name: string,
  subs: number,
};

export type ModelCoachConditionInput = {
  name?: ModelStringInput | null,
  subs?: ModelIntInput | null,
  and?: Array< ModelCoachConditionInput | null > | null,
  or?: Array< ModelCoachConditionInput | null > | null,
  not?: ModelCoachConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCoachInput = {
  id: string,
  name?: string | null,
  subs?: number | null,
};

export type DeleteCoachInput = {
  id: string,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type ModelCoachFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  subs?: ModelIntInput | null,
  and?: Array< ModelCoachFilterInput | null > | null,
  or?: Array< ModelCoachFilterInput | null > | null,
  not?: ModelCoachFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCoachFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  subs?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCoachFilterInput | null > | null,
  or?: Array< ModelSubscriptionCoachFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    coachSub?:  {
      __typename: "ModelCoachConnection",
      items:  Array< {
        __typename: "Coach",
        id: string,
        name: string,
        subs: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    coachSub?:  {
      __typename: "ModelCoachConnection",
      items:  Array< {
        __typename: "Coach",
        id: string,
        name: string,
        subs: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    coachSub?:  {
      __typename: "ModelCoachConnection",
      items:  Array< {
        __typename: "Coach",
        id: string,
        name: string,
        subs: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateCoachMutationVariables = {
  input: CreateCoachInput,
  condition?: ModelCoachConditionInput | null,
};

export type CreateCoachMutation = {
  createCoach?:  {
    __typename: "Coach",
    id: string,
    name: string,
    subs: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCoachMutationVariables = {
  input: UpdateCoachInput,
  condition?: ModelCoachConditionInput | null,
};

export type UpdateCoachMutation = {
  updateCoach?:  {
    __typename: "Coach",
    id: string,
    name: string,
    subs: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCoachMutationVariables = {
  input: DeleteCoachInput,
  condition?: ModelCoachConditionInput | null,
};

export type DeleteCoachMutation = {
  deleteCoach?:  {
    __typename: "Coach",
    id: string,
    name: string,
    subs: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    coachSub?:  {
      __typename: "ModelCoachConnection",
      items:  Array< {
        __typename: "Coach",
        id: string,
        name: string,
        subs: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      name: string,
      coachSub?:  {
        __typename: "ModelCoachConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCoachQueryVariables = {
  id: string,
};

export type GetCoachQuery = {
  getCoach?:  {
    __typename: "Coach",
    id: string,
    name: string,
    subs: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCoachesQueryVariables = {
  filter?: ModelCoachFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoachesQuery = {
  listCoaches?:  {
    __typename: "ModelCoachConnection",
    items:  Array< {
      __typename: "Coach",
      id: string,
      name: string,
      subs: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoachesByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCoachFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoachesByNameQuery = {
  coachesByName?:  {
    __typename: "ModelCoachConnection",
    items:  Array< {
      __typename: "Coach",
      id: string,
      name: string,
      subs: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
  owner?: string | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    coachSub?:  {
      __typename: "ModelCoachConnection",
      items:  Array< {
        __typename: "Coach",
        id: string,
        name: string,
        subs: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    coachSub?:  {
      __typename: "ModelCoachConnection",
      items:  Array< {
        __typename: "Coach",
        id: string,
        name: string,
        subs: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    name: string,
    coachSub?:  {
      __typename: "ModelCoachConnection",
      items:  Array< {
        __typename: "Coach",
        id: string,
        name: string,
        subs: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateCoachSubscriptionVariables = {
  filter?: ModelSubscriptionCoachFilterInput | null,
  owner?: string | null,
};

export type OnCreateCoachSubscription = {
  onCreateCoach?:  {
    __typename: "Coach",
    id: string,
    name: string,
    subs: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCoachSubscriptionVariables = {
  filter?: ModelSubscriptionCoachFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCoachSubscription = {
  onUpdateCoach?:  {
    __typename: "Coach",
    id: string,
    name: string,
    subs: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCoachSubscriptionVariables = {
  filter?: ModelSubscriptionCoachFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCoachSubscription = {
  onDeleteCoach?:  {
    __typename: "Coach",
    id: string,
    name: string,
    subs: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
