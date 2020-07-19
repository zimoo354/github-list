interface RepositoryType {
  svn_url: string | null;
  clone_url: string | null;
  name: string | null;
  description: string | null;
};

interface UserType {
  name: string | null;
  login: string | null;
  html_url: string | null;
  avatar_url: string | null;
  bio: string | null;
  location: string | null;
  company: string | null;
  blog: string | null;
};

export {
  RepositoryType,
  UserType,
};
