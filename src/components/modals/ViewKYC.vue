<template>
  <!-- Details  -->
  <ModalDialog>
    <template #header>
      <div class="d-flex align-items-center justify-content-between">
        <h6>KYC Details</h6>
        <span role="button" @click="close()">
          <i-icon
            icon="material-symbols:close"
            class="text-danger"
            width="25px"
          />
        </span>
      </div>
    </template>

    <template #body>
      <div>
        <!-- <h6 class="" style="font-weight: 600">
          KYC
          <span class="text-uppercase"> {{ "#" + createRef(data.id) }}</span>
        </h6>
        <hr /> -->
        <div class="w-100">
          <h6 class="details-header tw-mb-0">Status</h6>
          <span class="status" :class="data.status">{{ data.status }}</span>
        </div>
        <hr />
        <div class="w-100">
          <h6 class="details-header tw-mb-0">Full Legal Name</h6>
          <p class="details-body">
            {{ data.full_legal_name }}
          </p>
        </div>
        <hr />
        <div class="w-100">
          <h6 class="details-header tw-mb-0">Email</h6>
          <p class="details-body text-lowercase">
            {{ data.user.email }}
          </p>
        </div>
        <hr />
        <div class="w-100">
          <h6 class="details-header tw-mb-0">Phone Number</h6>
          <p class="details-body">
            {{ data.phoneNumber }}
          </p>
        </div>
        <hr />
        <div class="w-100">
          <h6 class="details-header tw-mb-0">Document Type</h6>
          <p class="details-body">
            {{ data.document_type }}
          </p>
        </div>
        <hr />
        <div class="w-100">
          <h6 class="details-header tw-mb-0">Proof</h6>
          <a
            :href="url + data.document"
            target="_blank"
            class="text-info details-body"
            >View Proof</a
          >
        </div>
        <hr />
        <div class="d-flex" style="gap: 10px" v-if="data.status === 'pending'">
          <button class="primary-btn" @click="updateKYC('approve-kyc')">
            Approve
          </button>
          <button class="danger-btn" @click="updateKYC('decline-kyc')">
            Decline
          </button>
        </div>
      </div>
    </template>
  </ModalDialog>
</template>

<script>
import ModalDialog from "@/components/ModalComponent.vue";
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    ModalDialog,
  },
  data() {
    return {
      url: process.env.VUE_APP_API_URL,
      data: {},
    };
  },
  methods: {
    updateKYC(value) {
      const payload = {
        user_id: this.data.userId,
        id: this.data.id,
        operation: value,
      };
      this.$axios
        .put(`admin/users/${payload.user_id}/${payload.operation}`)
        .then((res) => {
          console.log(res);
          this.$toastify({
            text: `${res.data.message}`,
            className: "info",
            position: "center",
            style: {
              background: "black",
              fontSize: "12px",
              borderRadius: "5px",
            },
          }).showToast();
          this.view(payload.id);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    view(e) {
      this.$axios
        .get(`admin/kycs/${e}`)
        .then((res) => {
          this.data = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    close() {
      this.$emit("close");
    },
  },

  mounted() {
    this.data = this.item
  },

  computed: {},
};
</script>

<style></style>
