import { types as t, flow } from "mobx-state-tree";
import { User, Repository } from "../types/index";
import Api from "../api";
import { toJS } from "mobx";

const ProfileStore = t.model({
  username: t.maybeNull(t.string),
  user: t.maybeNull(User),
  repositories: t.maybeNull(t.array(Repository)),
})
  .actions(self => ({
    getProfile: flow(function* (username: string, callback: Function) {
      self.username = username;
      const response = yield Api.getUser(username);
      self.user = toJS(response.user);
      self.repositories = toJS(response.repositories);
      callback();
    }),
  }))
  .views(self => ({
    getUser: () => self.user,
    getRepositories: () => self.repositories,
  }));

export default ProfileStore;
