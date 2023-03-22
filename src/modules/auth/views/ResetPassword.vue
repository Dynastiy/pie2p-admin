<template>
  <div class="auth-container">
    <div class="auth-content">
      <div>
        <img src="@/assets/img/logo.svg" alt="" />
      </div>

      <div>
        <div class="my-4">
          <h4 class="text-uppercase text-center">Reset your password</h4>
          <!-- <small
            >Enter your email address below and we’ll send an email with a link
            to update your password.</small
          > -->
        </div>
        <form action="" @submit.prevent="login">
          <span v-if="error" class="mb-3 error-alert">{{ error }}</span>
          <div class="mb-3">
            <label for="">New Password</label>
            <div class="input-field">
              <i-icon icon="uil:padlock" class="form-icon" />
              <input
                type="email"
                v-model="credentials.email"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div class="mb-4">
            <label for="">Confirm Password</label>
            <div class="input-field">
              <i-icon icon="uil:padlock" class="form-icon" />
              <input
                type="email"
                v-model="credentials.email"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div class="">
            <button
              class="primary-btn w-100 mb-3"
              :class="loading ? 'bg-secondary' : ''"
              :disabled="loading"
            >
              <span v-if="loading"
                ><i-icon
                  icon="eos-icons:bubble-loading"
                  width="20px"
                  class="text-white"
                />
              </span>
              <span v-else>reset password</span>
            </button>
            <!-- <button class="outline-btn w-100">reset password</button> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => {
    return {
      credentials: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    login() {
      let credentials = {
        email: this.credentials.email,
        password: this.credentials.password,
      };
      this.loginUser(credentials);
    },
  },

  mounted() {
    this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
  },

  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      user: (state) => state.user,
    }),
  },
};
</script>

<style></style>
