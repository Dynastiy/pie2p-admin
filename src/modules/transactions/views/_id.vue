<template>
  <div class="transaction-details">
    Transaction Details
    <div>
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions("transactions", ["view"]),
  },
  beforeMount() {
    this.view(this.id);
  },
  computed: {
    ...mapState("transactions", {
      item: (state) => state.singleDataSet,
    }),
  },
};
</script>

<style></style>
