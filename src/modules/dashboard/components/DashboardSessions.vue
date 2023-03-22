<template>
  <div id="sessions">
    <h5 class="header-text">Sessions</h5>
    <p class="body-text">Sessions created by Trainers</p>
    <div class="d-flex flex-column" style="gap: 15px">
      <div
        v-for="item in sessions"
        :key="item.id"
        class="d-flex align-items-center justify-content-between"
      >
        <div class="d-flex align-items-center" style="gap: 10px">
          <img :src="item.img" class="session-img" alt="" />
          <div>
            <h6 class="session-header">{{ item.user }}</h6>
            <span class="timeline-text"> {{ item.email }} </span>
          </div>
        </div>
        <span class="session-date">{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import sessions from "@/api/sessions";
export default {
  data: () => {
    return {
      sessions,
    };
  },
};
</script>

<style></style>
