import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_EgYpOOQnn',
  ClientId: '7l6316r1n1akf822s01p5da42u',
};

const pool = new CognitoUserPool(poolData);

export default pool;
