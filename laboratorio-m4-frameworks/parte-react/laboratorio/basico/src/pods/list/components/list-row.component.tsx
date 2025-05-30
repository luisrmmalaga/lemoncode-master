import React from "react";
import { MemberEntity } from "../list.vm";
import { Link } from "react-router-dom";
import { routes } from "@/router";

interface Props {
  member: MemberEntity;
}

export const ListRow: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <Link to={routes.detail(member.login)} className="user-list-content">
      <span className="user-list-column first-column">
        <img src={member.avatarUrl} />
      </span>
      <span className="user-list-column second-column">{member.id}</span>
      <span className="user-list-column third-column">{member.login}</span>
    </Link>
  );
};
