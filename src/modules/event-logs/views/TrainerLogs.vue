<template>
  <div>
    <div class="spacer">
      <button
        @click="getTrainerLogs"
        class="outline-btn d-flex align-items-center"
        style="gap: 5px"
      >
        <span>refresh</span>
        <i-icon icon="bx:refresh" width="18px" />
      </button>
    </div>
    <div class="spacer pt-0">
      <DataTable :LogType="LogType" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DataTable from "@/modules/event-logs/components/tables/DataTable.vue";
export default {
  components: { DataTable },
  data: () => {
    return {
      LogType: "",
    };
  },
  methods: {
    ...mapActions("eventLogs", ["getLogs"]),
    getTrainerLogs() {
      let payload = {
        role: "trainer",
        id: {
          adminId: this.user.id,
        },
      };
      this.getLogs(payload);
      this.LogType = "trainer";
    },
  },
  beforeMount() {
    this.getTrainerLogs();
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>

<style></style>
