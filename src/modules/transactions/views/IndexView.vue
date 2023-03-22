<template>
  <div class="">
    <h3 class="font-weight-bold spacer">{{ routeName }}</h3>
    <div class="spacer pt-0">
      <DataTable />
    </div>
  </div>
</template>

<script>
import DataTable from "../components/DataTable.vue";
import { mapActions } from "vuex";
export default {
  components: { DataTable },
  data: () => {
    return {
      page: 1,
    };
  },
  methods: {
    ...mapActions("transactions", ["list"]),
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
