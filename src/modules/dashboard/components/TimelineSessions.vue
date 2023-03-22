<template>
  <div id="timeline-sessions">
    <ActivityTimeline />
    <DashboardSessions />
  </div>
</template>

<script>
import ActivityTimeline from "./ActivityTimeline.vue";
import DashboardSessions from "./DashboardSessions.vue";

export default { components: { ActivityTimeline, DashboardSessions } };
</script>

<style></style>
