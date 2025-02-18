import React from "react";
import { MemberRow } from "./member-row.component";
import { MemberEntity } from "./model";

export const MemberList: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>(undefined);

  React.useEffect(() => {
    fetch("https://api.github.com/orgs/lemoncode/members")
      .then((response) => response.json())
      .then((result) => setMembers(result));
  }, []);

  return (
    <div className="list">
      <span className="header">Picture</span>
      <span className="header">ID</span>
      <span className="header">Login</span>
      {members?.map((member) => (
        <MemberRow key={member.id} member={member} />
      ))}
    </div>
  );
};
