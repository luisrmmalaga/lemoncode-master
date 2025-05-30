import * as am from "./api/api.model";
import * as vm from "./list.vm";

export const mapMemberApiToViewModel = (
  data: am.MemberEntity
): vm.MemberEntity => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url,
});

export const mapMembersApiToViewModel = (
  data: am.MemberEntity[]
): vm.MemberEntity[] => data.map(mapMemberApiToViewModel);
