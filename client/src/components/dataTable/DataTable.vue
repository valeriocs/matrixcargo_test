<template>
  <div>
    <v-data-table
      hide-default-footer
      :headers="headers"
      :items="items"
      :items-per-page="pagination.perPage"
      class="elevation-1"
    >
      <template
        v-slot:[`item.fullName`]="{ item }"
      >
        <a :href="item.htmlHref">
          {{ item.fullName.toUpperCase() }}
        </a>
      </template>
      <template
        v-slot:[`item.owner`]="{ item }"
      >
        <a :href="item.ownerHref">
          {{ item.owner.toUpperCase() }}
        </a>
      </template>
      <template v-slot:top>
        <div
          class="overline text-center"
        >
          We found {{ pagination.totalItems }} repositories by the selected language
        </div>
      </template>
    </v-data-table>
     <div class="text-center pt-2">
      <v-pagination
        :total-visible="7"
        v-model="selectedPage"
        :length="totalPages"
      ></v-pagination>
     </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    language: {
      type: String,
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
      default: () => ({
        perPage: 15,
        page: 1,
        totalItems: 0,
      }),
    },
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.pagination.totalItems / this.pagination.perPage);
    },

    selectedPage: {
      get() {
        return this.pagination.page;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
