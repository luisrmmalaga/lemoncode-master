import React from "react";
import { Link } from "react-router-dom";
import { MemberDetail } from "./detail.vm";
import { routes } from "@/router";

interface Props {
  member: MemberDetail;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <div className="detail-card">
      <h1>Detail Page</h1>
      <img src={member.avatarUrl} />
      <p>Id: {member.id}</p>
      <p>Name: {member.name}</p>
      <p>Login: {member.login}</p>
      <p>Email: {member.email}</p>
      <p>Company: {member.company}</p>
      <p>Bio: {member.bio}</p>
      <Link to={routes.root}>Back to List Page</Link>
    </div>
  );
};
