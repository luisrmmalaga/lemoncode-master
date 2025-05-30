import React from "react";
import { useParams } from "react-router-dom";
import { createDefaultMemberDetail, MemberDetail } from "./detail.vm";
import { getMemberDetails } from "./api";
import { Detail } from "./detail.component";
import { mapMemberApiToViewModel } from "./detail.mapper";

export const DetailContainer: React.FC = () => {
  const [member, setMember] = React.useState<MemberDetail>(
    createDefaultMemberDetail()
  );

  const { login } = useParams();

  React.useEffect(() => {
    getMemberDetails(login).then(mapMemberApiToViewModel).then(setMember);
  }, []);

  return (
    <>
      <Detail member={member} />
    </>
  );
};
