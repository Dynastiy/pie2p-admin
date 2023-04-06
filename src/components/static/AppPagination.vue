<template>
  <div>
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
