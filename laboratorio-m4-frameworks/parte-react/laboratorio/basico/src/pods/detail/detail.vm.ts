export interface MemberDetail {
  id: number;
  login: string;
  avatarUrl: string;
  company: string;
  bio: string;
  name: string;
  email: string;
}

export const createDefaultMemberDetail = (): MemberDetail => ({
  id: null,
  login: "",
  avatarUrl: "",
  company: "",
  bio: "",
  name: "",
  email: "",
});
