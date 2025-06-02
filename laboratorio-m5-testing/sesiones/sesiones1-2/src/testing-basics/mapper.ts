import * as am from './api-model';
import * as vm from './view-model';

export const mapMemberApiToViewModel = (
  data: am.MemberEntity
): vm.MemberEntity => ({
  id: data.id.toString(),
  login: data.login,
  avatarUrl: data.avatar_url,
});

export const mapMembersApiToViewModel = (
  data: am.MemberEntity[]
): vm.MemberEntity[] =>
  Array.isArray(data) ? data.map(mapMemberApiToViewModel) : [];
