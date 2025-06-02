import React from 'react';
import { useParams } from 'react-router';

type ParamProps = {
  name: string;
};

export const UserEdit: React.FC = () => {
  const { name } = useParams<ParamProps>();

  return <h1>User name: {name}</h1>;
};
