import { types as t, Instance } from "mobx-state-tree";

const User = t.model({
  name: t.maybeNull(t.string),
  login: t.maybeNull(t.string),
  html_url: t.maybeNull(t.string),
  avatar_url: t.maybeNull(t.string),
  bio: t.maybeNull(t.string),
  location: t.maybeNull(t.string),
  company: t.maybeNull(t.string),
  blog: t.maybeNull(t.string),
});
type UserType = Instance<typeof User>;

const Repository = t.model({
  svn_url: t.maybeNull(t.string),
  clone_url: t.maybeNull(t.string),
  name: t.maybeNull(t.string),
  description: t.maybeNull(t.string),
});
type RepositoryType = Instance<typeof Repository>;

export {
  User,
  Repository,
  RepositoryType,
  UserType,
};
