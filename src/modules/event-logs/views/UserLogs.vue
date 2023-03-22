<template>
  <div>
    <div class="spacer">
      <button
        @click="getUserLogs"
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
    getUserLogs() {
      let payload = {
        role: "user",
        id: {
          adminId: this.user.id,
        },
      };
      this.getLogs(payload);
      this.LogType = "user";
    },
  },
  beforeMount() {
    this.getUserLogs();
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>

<style></style>
