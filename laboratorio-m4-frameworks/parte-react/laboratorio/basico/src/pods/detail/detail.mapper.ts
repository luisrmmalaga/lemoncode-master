import * as am from "./api/api.model";
import * as vm from "./detail.vm";

export const mapMemberApiToViewModel = (
  data: am.MemberDetail
): vm.MemberDetail => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
  company: data.company,
  bio: data.bio,
  name: data.name,
  email: data.email,
});
