export interface GithubCommitResponse {
  sha: string;
  commit: Commit;
  html_url: string;
  author: AuthorDetails;
  committer: CommiterDetails;
}

interface Commit {
  author: Author;
  commiter: Commiter;
  message: string;
}

interface Author {
  name: string;
  email: string;
  date: string;
}

interface Commiter extends Author { }

interface AuthorDetails {
  login: string;
  id: string;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
}

interface CommiterDetails extends AuthorDetails { }
