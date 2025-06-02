import React from 'react';
import { AppRouter } from './router';
// import { CookiesDialog } from '#components/cookies-dialog';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <h1>Hello world!</h1>
    </>
  );
};

// export const App: React.FunctionComponent = () => {
//   return <AppRouter />;
// };

// export const App: React.FunctionComponent = () => {
//   return (
//     <CookiesDialog
//       onAgreeClick={() => {
//         console.log('Cookies dialog agreed');
//       }}
//     ></CookiesDialog>
//   );
// };
