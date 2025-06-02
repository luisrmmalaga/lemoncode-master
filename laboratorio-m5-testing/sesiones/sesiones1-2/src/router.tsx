import React from 'react';
import { Route, HashRouter, Routes } from 'react-router';
import { NameCollection } from './components/name-collection';
import { UserEdit } from '#components/user-edit';

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NameCollection />} />
        <Route path="user/:name" element={<UserEdit />}></Route>
      </Routes>
    </HashRouter>
  );
};

// export const AppRouter: React.FC = () => {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<NameCollection />} />
//         <Route path="user/:name" element={<UserEdit />}></Route>
//       </Routes>
//     </HashRouter>
//   );
// };
