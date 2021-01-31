import http from '@/service/http';

export default {
  getHeaders() {
    return [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'fullName',
      },
      {
        text: 'Owner',
        align: 'center',
        sortable: false,
        value: 'owner',
      },
      {
        text: 'Language',
        align: 'center',
        sortable: false,
        value: 'language',
      },
    ];
  },

  getRepositories(pagination, language) {
    const params = {
      ...pagination,
      language,
    };
    return http.get('/github-repositories', { params });
  },

  getLanguages() {
    return http.get('/languages');
  },

};
