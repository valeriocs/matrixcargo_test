module.exports = class GitHubRepoModel {
  constructor({ full_name, owner, id, html_url, language }) {
    this.id = id;
    this.fullName = full_name;
    this.owner = owner.login;
    this.ownerHref = owner.url;
    this.htmlHref = html_url;
    this.language = language;
  };
};