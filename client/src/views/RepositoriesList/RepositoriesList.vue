<template>
  <v-container class="home">
    <v-row>
      <v-col cols="12">
        <v-select
          :items="languages"
          label="Select an language"
          outlined
          v-model="selectedLanguageProxy"
        ></v-select>
      </v-col>
      <v-col cols="12" v-if="!loading">
        <list
          :language="selectedLanguage"
          :items="repositoresList"
          :pagination="pagination"
          :headers="headers"
          v-model="pagination.page"
        />
      </v-col>
      <v-col cols="12" v-else class="text-center">
        <v-progress-circular
          :size="100"
          color="purple"
          indeterminate
        ></v-progress-circular>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from '@/components/dataTable/DataTable.vue';
import Languages from '@/service/utils/languages';
import service from './RepositoriesListService';

export default {
  name: 'RepositoriesList',
  components: {
    List,
  },

  data: () => ({
    loading: false,
    selectedLanguage: 'javascript',
    languages: [],
    headers: [],
    repositoresList: [],
    pagination: {
      perPage: 15,
      page: 1,
      totalItems: 0,
    },
  }),

  methods: {
    getHeaders() {
      this.headers = service.getHeaders();
    },

    getRepositories() {
      this.loading = true;
      const { selectedLanguage, pagination } = this;

      service.getRepositories(pagination, selectedLanguage).then(({ data }) => {
        this.pagination.totalItems = data.totalCount;
        this.repositoresList = data.repositories;
        this.loading = false;
      });
    },

    getLanguages() {
      this.languages = Languages;
    },

  },

  created() {
    this.getLanguages();
    this.getHeaders();
    this.getRepositories();
  },

  computed: {
    currentPage() {
      return this.pagination.page;
    },

    selectedLanguageProxy: {
      get() {
        return this.selectedLanguage;
      },

      set(newValue) {
        this.selectedLanguage = newValue;
        this.pagination = {
          perPage: 15,
          page: 1,
          totalItems: 0,
        };
        this.getRepositories();
      },
    },
  },

  watch: {
    currentPage() {
      this.getRepositories();
    },
  },
};
</script>
