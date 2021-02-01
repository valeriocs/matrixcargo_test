const express = require('express');
const router = express.Router();
const controllerInstance = require('../controller/githubRepositoriesController');

router.get('/', async (req, res) => {
  const response = controllerInstance.github_repo_search(req);
  res.send(await response);
});

module.exports = router;
