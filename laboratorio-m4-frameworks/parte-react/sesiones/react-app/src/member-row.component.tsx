import React from "react";
import { MemberEntity } from "./model";

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.FC<Props> = (props: Props) => {
  const { member } = props;

  return (
    <>
      <img src={member.avatar_url} />
      <span>{member.id}</span>
      <span>{member.login}</span>
    </>
  );
};
