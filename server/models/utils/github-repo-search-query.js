module.exports = class GitHubSearchQuery {
    constructor({ page, perPage, language }) {
      this.page = page;
      this.per_page = perPage;
      this.q = this.languageQueryTransform(language);
    };

    languageQueryTransform(language) {
        return `language:${language}`;
    };

  };