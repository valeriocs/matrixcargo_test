const GitHubRepoModel = require('./GitHubRepoModel')

module.exports = class GitHubResponseModel {
    constructor({ total_count, items }) {
      this.totalCount = total_count;
      this.repositories = this.repositoriesTransform(items);
    };

    repositoriesTransform(list) {
        const itemList = [];
        list.forEach(element => {
            const repo = new GitHubRepoModel(element);
            itemList.push(repo);
        });

        return itemList;
    }
}


