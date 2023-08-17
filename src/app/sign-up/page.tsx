// "use client";

// import React, { useState } from 'react';
// import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
// import axios from 'axios';
// import UserPool from './UserPool';
// import { User, Coach } from '../types/accounts';

// const SignUp = () => {
//   const [user, setUser] = useState<User>({
//     id: '',
//     name: '',
//     tt_username: '',
//   });

//   const [coach, setCoach] = useState<Coach>({
//     id: '',
//     name: '',
//   });

//   const [userPassword, setUserPassword] = useState<string>('');
//   const [coachPassword, setCoachPassword] = useState<string>('');

//   const saveUser = () => {
//     axios
//       .post('http://localhost:3000/users', user)
//       .then(function goodResponse(response) {
//         console.log(response);
//       })
//       .catch(function badResponse(error) {
//         console.log(error);
//       });
//   };

//   const saveCoach = () => {
//     axios
//       .post('http://localhost:3000/coaches', coach)
//       .then(function goodResponse(response) {
//         console.log(response);
//       })
//       .catch(function badResponse(error) {
//         console.log(error);
//       });
//   };

//   const onSubmitAsUser = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     UserPool.signUp(user.name, userPassword, [], [], (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(user);
//         saveUser();
//       }
//     });
//   };

//   const onSubmitAsCoach = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     UserPool.signUp(coach.name, coachPassword, [], [], (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(coach);
//         saveCoach();
//       }
//     });
//   };

//   return (
//     <main>
//       <h1>Sign Up as a Student</h1>
//       {/* <form onSubmit={onSubmitAsUser}>
//         <label htmlFor="email">Email</label>
//         <input
//           value={user.name}
//           onChange={(event) =>
//             setUser({ id: '', name: event.target.value, tt_username: 'test' })
//           }
//         ></input>
//         <label htmlFor="password">Password</label>
//         <input
//           value={userPassword}
//           onChange={(event) => setUserPassword(event.target.value)}
//         ></input>

//         <button type="submit">Sign Up</button>
//       </form> */}

//       <h1>Sign Up as a Coach</h1>
//       {/* <form onSubmit={onSubmitAsCoach}>
//         <label htmlFor="email">Email</label>
//         <input
//           value={coach.name}
//           onChange={(event) => setCoach({ id: '', name: event.target.value })}
//         ></input>
//         <label htmlFor="password">Password</label>
//         <input
//           value={coachPassword}
//           onChange={(event) => setCoachPassword(event.target.value)}
//         ></input>

//         <button type="submit">Sign Up</button>
//       </form> */}
//     </main>
//   );
// };

// export default SignUp;