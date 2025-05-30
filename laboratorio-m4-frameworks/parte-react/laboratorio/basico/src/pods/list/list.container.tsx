import React from "react";
import { List } from "./list.component";
import { MemberEntity } from "./list.vm";
import { getMembers } from "./api";
import { mapMembersApiToViewModel } from "./list.mapper";
import { OrganisationContext } from "@/core/providers";

export const ListContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { organisation } = React.useContext(OrganisationContext);

  React.useEffect(() => {
    getMembers(organisation).then(mapMembersApiToViewModel).then(setMembers);
  }, [organisation]);

  return <List members={members} />;
};
