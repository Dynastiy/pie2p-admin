<template>
  <div>
    <div class="pagination__page">
      <button
        class="mr-3"
        @click="nextPage((page = 1))"
        v-if="meta.currentPage > 1"
      >
        First
      </button>

      <a
        class="mr-3"
        @click="nextPage(meta.previousPage)"
        v-if="meta.currentPage > 1"
      >
        &laquo;
      </a>

      <!-- <ul class="list-unstyled d-flex paged align-items-center m-0">
        <li v-for="page in meta.last_page" :key="page">
          <a
            class="mr-3"
            @click.prevent="nextPage(page)"
            :class="{ current: meta.currentPage === page }"
            v-if="
              Math.abs(page - meta.currentPage) < 5 ||
              page === 10 ||
              page == meta.last_page - 1 ||
              page == 0
            "
          >
            {{ page }}
          </a>
        </li>
      </ul> -->

      <a class="" @click="nextPage(meta.nextPage)"> &raquo; </a>

      <!-- <button
        class="ml-3"
        @click="nextPage(meta.last_page)"
        v-if="meta.currentPage !== meta.last_page"
      >
        Last
      </button> -->

      {{ meta }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["meta"],
  data() {
    return {
      // pages: {},
      // page: this.$route.query.page,
    };
  },
  methods: {
    nextPage(page) {
      this.$emit("next", page);
    },
  },
  async created() {
    // this.getPages();
  },
};
</script>
<style>
.paged a.first::after {
  content: "...";
}
.paged a.last::before {
  content: "...";
}
</style>
