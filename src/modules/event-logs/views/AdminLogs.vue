<template>
  <div>
    <div class="spacer">
      <div class="d-flex align-items-center justify-content-between">
        <button class="outline-btn d-flex align-items-center" style="gap: 5px">
          <span>refresh</span>
          <i-icon icon="bx:refresh" width="18px" />
        </button>
        <button class="primary-btn filter-button">filter</button>
      </div>
    </div>
    <div class="spacer pt-0">
      <DataTable />
    </div>
  </div>
</template>

<script>
import DataTable from "@/modules/event-logs/components/tables/DataTable.vue";
export default {
  components: { DataTable },
  data: () => {
    return {};
  },
};
</script>

<style></style>
