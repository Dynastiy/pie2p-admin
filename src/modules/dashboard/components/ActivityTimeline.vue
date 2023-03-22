<template>
  <div id="activity-timeline">
    <h5 class="header-text mb-3">Activity Timeline</h5>
    <div class="d-flex flex-column" style="gap: 15px">
      <div
        v-for="item in timeline"
        :key="item.id"
        class="d-flex justify-content-between"
      >
        <div class="d-flex align-items-center" style="gap: 10px">
          <span class="color-indicator"></span>
          <div>
            <h6 class="timeline-header">{{ item.activity }}</h6>
            <span class="timeline-text"> {{ item.date }} </span>
          </div>
        </div>
        <router-link class="timeline-link" to="/">View All</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import timeline from "@/api/timeline";
export default {
  data: () => {
    return {
      timeline,
    };
  },
};
</script>

<style></style>
