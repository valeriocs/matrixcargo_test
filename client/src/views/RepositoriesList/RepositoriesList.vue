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
          result-label="repositories by the selected language"
          :language="selectedLanguage"
          :items="repositoresList"
          :pagination="pagination"
          :headers="headers"
          v-model="pagination.page"
        >
         <template
           v-slot:[`item.fullName`]="{ item }"
          >
            <a :href="item.htmlHref" target="_blank">
            {{ item.fullName.toUpperCase() }}
            </a>
          </template>
          <template
            v-slot:[`item.owner`]="{ item }"
          >
            <a :href="item.ownerHref" target="_blank">
              {{ item.owner.toUpperCase() }}
            </a>
          </template>
        </list>
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
import localLanguages from '../../service/utils/languages';
import service from './RepositoriesListService';

export default {
  name: 'RepositoriesList',
  components: {
    List,
  },

  data: () => ({
    loading: false,
    selectedLanguage: 'JavaScript',
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

    languagesDataTransform(languages) {
      return languages.map(({ name }) => name);
    },

    getLanguages() {
      service.getLanguages().then(({ data }) => {
        this.languages = this.languagesDataTransform(data);
      }).catch(() => {
        this.languages = localLanguages;
      });
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
