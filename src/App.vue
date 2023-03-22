<template>
  <div id="app">
    <AppLayout>
      <transition name="fade">
        <router-view />
      </transition>
    </AppLayout>
    <!-- Success and Error Alerts -->
    <!-- <SuccessAlert />
    <ErrorAlert /> -->
  </div>
</template>

<script>
// import ErrorAlert from "./components/alerts/errorAlert.vue";
// import SuccessAlert from "./components/alerts/successAlert.vue";
import AppLayout from "./layouts/AppLayout.vue";
export default {
  components: {
    AppLayout,
    // , SuccessAlert, ErrorAlert
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
