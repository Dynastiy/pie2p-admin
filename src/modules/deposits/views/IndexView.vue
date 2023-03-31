<template>
    <div class="">
      <h3 class="font-weight-bold spacer pb-0">{{ routeName }}</h3>
      <div class="spacer pt-0">
        <DataTable />
      </div>
    </div>
  </template>
  
  <script>
  import DataTable from "../components/tables/DataTable.vue";
  import { mapActions } from "vuex";
  export default {
    components: { DataTable },
    data: () => {
      return {
        page: 1,
      };
    },
    methods: {
      ...mapActions("deposits", ["list"]),
    },
    beforeMount() {
      this.list(this.page);
    },
    computed: {
      routeName() {
        return this.$route.name;
      },
    },
  };
  </script>
  
  <style></style>
  