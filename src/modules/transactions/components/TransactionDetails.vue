<template>
  <div class="transaction-details">
    <div v-if="loading" class="text-center">
      <i-icon icon="eos-icons:bubble-loading" />
    </div>
    <div v-else>
      <h6 class="" style="font-weight: 400">
        Transaction
        <span class="text-uppercase"> {{ "#" + createRef(item.id) }}</span>
      </h6>

      <div class="d-flex align-items-center mt-3 align-items-center">
        <div class="w-100">
          <h6 class="details-header">Status</h6>
          <span class="status" :class="item.status">{{ item.status }}</span>
        </div>
        <div class="w-100">
          <h6 class="details-header">Transaction Type</h6>
          <span class="type">{{ item.transactionType }}</span>
        </div>
        <div class="w-100">
          <h6 class="details-header">Channel</h6>
          <p
            class="details-body"
            :class="{
              'text-danger': item.channel === 'withdrawal',
              'text-success': item.channel === 'deposit',
            }"
          >
            {{ item.channel }}
          </p>
        </div>
      </div>

      <hr />
      <div class="d-flex">
        <div class="w-100">
          <h6 class="details-header">Amount</h6>
          <p class="details-body">
            {{ item.currency.symbol + Number(item.amount).toLocaleString() }}
          </p>
        </div>
        <div class="w-100">
          <h6 class="details-header">User</h6>
          <div class="d-flex" style="gap: 10px">
            <img
              src="@/assets/img/no-user.png"
              style="width: 40px;
                height: 40px;
                object-fit: cover;
                object-position: top;
                -o-object-fit: cover;
                -o-object-position: cover;
                border-radius: 50%;
              "
              alt=""
            />
            <div>
              <h6 class="details-body">
                {{ item.user.firstName + " " + item.user.lastName }}
              </h6>
              <p class="details-body text-lowercase">
                {{ item.user.email }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <h6 class="details-header">Payment Details</h6>
        <div class="payment-details" v-for="item in item.payment" :key="item.id">
          <div>
          <h6 class="details-header">Channel</h6>
          <p
            class="details-body"
            :class="{
              'text-danger': item.channel === 'withdrawal',
              'text-success': item.channel === 'deposit',
            }"
          >
            {{ item.channel }}
          </p>
        </div>
        <div>
          <h6 class="details-header">Gateway</h6>
          <p class="details-body">
                {{ item.gateway }}
              </p>
        </div>
        <div>
          <h6 class="details-header">Proof</h6>
          <!-- <p class="details-body">
                {{ item.proof }}
              </p> -->
              <a :href="url+item.proof" target="_blank" class="text-info details-body">View Proof</a>
        </div>
        <div>
          <h6 class="details-header">Payment Type</h6>
          <p class="details-body">
                {{ item.paymentType }}
              </p>
        </div>
        <div>
          <h6 class="details-header">Status</h6>
          <span class="status" :class="item.status">{{ item.status }}</span>
        </div>
        <div>
          <h6 class="details-header">Bank Name</h6>
          <p class="details-body">
                {{ item.bankName || "No data" }}
              </p>
        </div>
        <div>
          <h6 class="details-header">Bank Account Number</h6>
          <p class="details-body">
                {{ item.bankAccountNumber || "No data" }}
              </p>
        </div>
        <div>
          <h6 class="details-header">Amount</h6>
          <p class="details-body">
                {{ item.amount }}
              </p>
        </div>
        </div>
      </div>
      <hr />
      <div>
        <h6 class="details-header">Description</h6>
        <p class="details-body description">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { createRef } from "@/plugins/filters";
export default {
  data() {
    return {
      createRef,
      url: process.env.VUE_APP_API_URL
      //   id: this.$route.params.id,
    };
  },
  methods: {
    // ...mapActions("transactions", ["view"]),
  },
  beforeMount() {
    // this.view(this.id);
  },
  computed: {
    ...mapState("transactions", {
      item: (state) => state.singleDataSet,
      loading: (state) => state.loading,
    }),
  },
};
</script>

<style></style>
