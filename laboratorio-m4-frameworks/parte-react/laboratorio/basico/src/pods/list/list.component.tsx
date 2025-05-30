import React from "react";
import { MemberEntity } from "./list.vm";
import { ListHeader, ListRow, OrganisationSearcher } from "./components";

interface Props {
  members: MemberEntity[];
}

export const List: React.FC<Props> = (props) => {
  const { members } = props;

  return (
    <div className="list-page">
      <h1>List Page</h1>
      <OrganisationSearcher />
      <div className="user-list-container">
        <ListHeader />
        {members.map((member) => (
          <ListRow key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
