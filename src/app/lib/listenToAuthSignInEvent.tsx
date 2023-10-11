// import { API, Hub } from 'aws-amplify';
// import { createStudent } from '../../graphql/mutations';

// export const listenToAuthSignInEvent = async (setMyState: (value: boolean) => void) => {

//   Hub.listen('auth', async ({ payload }) => {
//     const { event } = payload;
//     if (event === 'autoSignIn') {
//       const user = payload.data;
//       const newStudent = {
//         id: user.attributes.userSub,
//         name: user.attributes.name,
//       };
//       try {
//         await API.graphql({
//           query: createStudent,
//           variables: {input: newStudent},
//           authMode: 'AMAZON_COGNITO_USER_POOLS'
//         });
//         console.log(user.attributes.name, 'was created!');
//         setMyState(true);
//       } catch (error) {
//         console.log('Error with GraphQl creation!', error);
//       }
//     } else if (event === 'autoSignIn_failure') {
//       throw new Error('Auto sign in failed');
//     }
//   })
// }
