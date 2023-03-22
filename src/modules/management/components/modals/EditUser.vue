<template>
  <ModalDialog>
    <template #header>
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <img src="" alt="" />
        </div>
        <span role="button" @click="$emit('close')">
          <i-icon
            icon="material-symbols:close"
            class="text-danger"
            width="25px"
          />
        </span>
      </div>
    </template>

    <template #body>
      <div></div>

      <hr />
      <div class="accounts mb-3">
        <h6 class="sub-header" role="button">Accounts</h6>
        <div>
          <small class="">Trainer Account</small>
        </div>
        <div class="mt-2">
          <small>Affiliate Account</small>
        </div>
      </div>

      <hr />
      <div class="accounts">
        <h6 class="sub-header" role="button">Reset Password</h6>
        <div></div>
      </div>
    </template>
  </ModalDialog>
</template>

<script>
import ModalDialog from "@/components/modals/ModalDialog.vue";
import { mapState } from "vuex";
export default {
  components: { ModalDialog },
  data: () => {
    return {
      activeNames: [""],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
  computed: {
    ...mapState("management", {
      dataSet: (state) => state.dataSet,
      loading: (state) => state.loading,
    }),
  },
};
</script>

<style></style>
