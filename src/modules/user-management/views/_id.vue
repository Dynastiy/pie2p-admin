<template>
  <div>Single User</div>
</template>

<script>
import { createRef, timeStamp } from "@/plugins/filters";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      activeEl: "1",
      id: this.$route.params.id,
      createRef,
      timeStamp,
    };
  },
  methods: {
    ...mapActions("users", ["view"]),
  },
  beforeMount() {
    this.view(this.id);
  },
  computed: {
    ...mapState("users", {
      loading: (state) => state.loading,
      data: (state) => state.singleDataSet,
    }),
  },
};
</script>

<style></style>
