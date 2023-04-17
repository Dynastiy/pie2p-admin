<template>
  <div>
    <div v-if="loading" class="text-center">
      <i-icon icon="eos-icons:bubble-loading" />
    </div>
    <div v-else>
      <h6 class="" style="font-weight: 600">
        KYC
        <span class="text-uppercase"> {{ "#" + createRef(data.id) }}</span>
      </h6>
      <hr>
      <div class="w-100">
          <h6 class="details-header">Status</h6>
          <span class="status" :class="data.status">{{ data.status }}</span>
        </div>
        <hr>
        <div class="w-100">
          <h6 class="details-header">Full Legal Name</h6>
          <p
            class="details-body"
          >
            {{ data.full_legal_name }}
          </p>
        </div>
        <hr>
        <div class="w-100">
          <h6 class="details-header">Email</h6>
          <p
            class="details-body text-lowercase"
          >
            {{ data.user.email }}
          </p>
        </div>
        <hr>
        <div class="w-100">
          <h6 class="details-header">Phone Number</h6>
          <p
            class="details-body"
          >
            {{ data.phoneNumber }}
          </p>
        </div>
        <hr>
        <div class="w-100">
          <h6 class="details-header">Document Type</h6>
          <p
            class="details-body"
          >
            {{ data.document_type }}
          </p>
        </div>
        <hr>
        <div class="w-100">
          <h6 class="details-header">Proof</h6>
          <a :href="url+data.document" target="_blank" class="text-info details-body">View Proof</a>
        </div>
        <hr>
        <div class="d-flex" style="gap: 10px">
          <button class="primary-btn" @click="updateKYC('approve-kyc')">Approve</button>
          <button class="danger-btn" @click="updateKYC('decline-kyc')">Decline</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { createRef } from '@/plugins/filters';
export default {
  data(){
    return {
      url: process.env.VUE_APP_API_URL,
      createRef
    }
  },
  methods:{
    ...mapActions("kyc", ["updateStatus"]),
    updateKYC(value) {
      let payload = {
        user_id: this.data.userId,
        id: this.data.id,
        page: 1,
        operation: value
      }
      this.updateStatus(payload)
    }
  },
  computed:{
    ...mapState("kyc", {
      data: (state) => state.singleDataSet,
      loading: (state) => state.loading
    })
  }
}
</script>

<style>

</style>