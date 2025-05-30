import { MemberEntity } from "./api.model";

export const getMembers = async (
  organisation: string
): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${organisation}/members`).then(
    (response) => response.json()
  );
};
