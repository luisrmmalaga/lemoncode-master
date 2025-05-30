import { MemberDetail } from "./api.model";

export const getMemberDetails = async (
  login: string
): Promise<MemberDetail> => {
  return fetch(`https://api.github.com/users/${login}`).then((response) =>
    response.json()
  );
};
