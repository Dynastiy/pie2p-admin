<template>
  <div>
    {{ routeName }}
  </div>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.name;
    },
  },
};
</script>

<style></style>
