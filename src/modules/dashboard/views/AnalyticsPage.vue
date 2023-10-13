<template>
  <div class="spacer">
    <div class="tw-grid tw-grid-cols-1 tw-gap-3">
      <div class="">
        <h5 class="tw-font-semibold tw-mb-3">Payments</h5>
        <div class="tw-grid tw-grid-cols-4 tw-gap-3">
          <div
            class="tw-bg-white tw-p-3 tw-rounded-lg"
            v-for="(item, idx) in currencies"
            :key="idx"
          >
            <span class="tw-flex tw-gap-2 tw-mb-3 tw-items-center">
              <img class="tw-w-4 tw-h-4" :src="item.icon" alt="" />
              <span class="tw-font-bold">
                {{ item.name }}
              </span>
            </span>
            <div class="tw-flex tw-flex-col tw-gap-2">
              <div
                v-for="(value, name) in filterData(data.payments[item.name])"
                :key="value"
                class="tw-flex tw-gap-2 tw-flex-wrap tw-items-center"
              >
                <span
                  class="tw-text-xs tw-text-light tw-capitalize tw-font-medium"
                  >{{ name.split("_").join(" ") }}:</span
                >
                <div class="tw-font-bold tw-text-sm">
                  <slot :name="name" :value="value"
                    >{{ value ? value : "0" }}
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tw-grid tw-grid-cols-2 tw-gap-3">
        <div class="tw-bg-white tw-p-5 tw-rounded-lg">
          <div class="tw-flex tw-mb-3 tw-gap-2">
            <h6 class="tw-font-medium tw-text-[14px]">Users</h6>
            <h6
              class="tw-bg-black tw-rounded-md tw-p-1 tw-text-sm tw-font-semibold tw-flex tw-justify-center tw-items-center tw-block tw-text-white"
            >
              {{ data.users.total }}
            </h6>
          </div>
          <div class="tw-flex tw-flex-col tw-gap-4">
            <div>
              <span class="tw-flex tw-gap-1 tw-items-centers tw-mb-1">
                <span class="tw-font-medium tw-block">Admins</span>
                <span
                  class="tw-bg-black tw-rounded-md tw-p-1 tw-text-sm tw-font-semibold tw-flex tw-justify-center tw-items-center tw-block tw-text-white"
                  >{{ data.users.totalAdmins }}</span
                >
              </span>
              <span
                class="tw-block tw-bg-green-100 tw-rounded-lg tw-h-3"
                :style="{
                  width:
                    `${getPercentage(data.users.total, data.users.total)}` +
                    '%',
                }"
              >
                <span
                  class="tw-block tw-bg-green-500 tw-rounded-lg tw-h-3"
                  :style="{
                    width:
                      `${getPercentage(
                        data.users.totalAdmins,
                        data.users.total
                      )}` + '%',
                  }"
                >
                </span>
              </span>
            </div>
            <div>
              <span class="tw-flex tw-gap-1 tw-items-centers tw-mb-1">
                <span class="tw-font-medium tw-block">Users</span>
                <span
                  class="tw-bg-black tw-rounded-md tw-p-1 tw-text-sm tw-font-semibold tw-flex tw-justify-center tw-items-center tw-block tw-text-white"
                  >{{ data.users.totalUsers }}</span
                >
              </span>
              <span
                class="tw-block tw-bg-amber-100 tw-rounded-lg tw-h-3"
                :style="{
                  width:
                    `${getPercentage(data.users.total, data.users.total)}` +
                    '%',
                }"
              >
                <span
                  class="tw-block tw-bg-amber-500 tw-rounded-lg tw-h-3"
                  :style="{
                    width:
                      `${getPercentage(
                        data.users.totalUsers,
                        data.users.total
                      )}` + '%',
                  }"
                >
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="tw-bg-white tw-p-5 tw-rounded-lg">
          <div class="tw-flex tw-mb-3 tw-gap-2">
            <h6 class="tw-font-medium tw-text-[14px]">Trades</h6>
            <h6
              class="tw-bg-black tw-rounded-md tw-p-1 tw-text-sm tw-font-semibold tw-flex tw-justify-center tw-items-center tw-block tw-text-white"
            >
              {{ data.trades.total }}
            </h6>
          </div>
          <div class="tw-flex tw-flex-col tw-gap-4">
            <div>
              <span class="tw-flex tw-gap-1 tw-items-centers tw-mb-1">
                <span class="tw-font-medium tw-block">Open trades</span>
                <span
                  class="tw-bg-black tw-rounded-md tw-p-1 tw-text-sm tw-font-semibold tw-flex tw-justify-center tw-items-center tw-block tw-text-white"
                  >{{ data.trades.totalOpen }}</span
                >
              </span>
              <span
                class="tw-block tw-bg-green-100 tw-rounded-lg tw-h-3"
                :style="{
                  width:
                    `${getPercentage(data.trades.total, data.trades.total)}` +
                    '%',
                }"
              >
                <span
                  class="tw-block tw-bg-green-500 tw-rounded-lg tw-h-3"
                  :style="{
                    width:
                      `${getPercentage(
                        data.trades.totalOpen,
                        data.trades.total
                      )}` + '%',
                  }"
                >
                </span>
              </span>
            </div>
            <div>
              <span class="tw-flex tw-gap-1 tw-items-centers tw-mb-1">
                <span class="tw-font-medium tw-block">Closed trades</span>
                <span
                  class="tw-bg-black tw-rounded-md tw-p-1 tw-text-sm tw-font-semibold tw-flex tw-justify-center tw-items-center tw-block tw-text-white"
                  >{{ data.trades.totalClosed }}</span
                >
              </span>
              <span
                class="tw-block tw-bg-red-100 tw-rounded-lg tw-h-3"
                :style="{
                  width:
                    `${getPercentage(data.trades.total, data.trades.total)}` +
                    '%',
                }"
              >
                <span
                  class="tw-block tw-bg-red-500 tw-rounded-lg tw-h-3"
                  :style="{
                    width:
                      `${getPercentage(
                        data.trades.totalClosed,
                        data.trades.total
                      )}` + '%',
                  }"
                >
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <h5 class="tw-font-semibold tw-mb-3">Transactions</h5>
        <div class="tw-grid tw-grid-cols-4 tw-gap-3">
          <div
            class="tw-bg-white tw-p-3 tw-rounded-lg"
            v-for="(item, idx) in currencies"
            :key="idx"
          >
            <span class="tw-flex tw-gap-2 tw-mb-3 tw-items-center">
              <img class="tw-w-4 tw-h-4" :src="item.icon" alt="" />
              <span class="tw-font-bold">
                {{ item.name }}
              </span>
            </span>
            <div class="tw-flex tw-flex-col  tw-gap-2">
              <div
                v-for="(value, name) in filterData(data.transactions[item.name])"
                :key="value"
                class="tw-flex tw-flex-wrap tw-gap-2 tw-items-center"
              >
                <span
                  class="tw-text-xs tw-text-light tw-capitalize tw-font-medium"
                  >{{ name.split("_").join(" ") }}:</span
                >
                <div class="tw-font-bold tw-text-sm">
                  <slot :name="name" :value="value"
                    >{{ value ? value : "0" }}
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { pick } from "lodash";
export default {
  components: {},
  data() {
    return {
      currencies: [
        { name: "NGN", icon: require("@/assets/img/pi2p_naira.svg") },
        { name: "PI", icon: require("@/assets/img/pi.png") },
        { name: "USDT", icon: require("@/assets/img/pi2p_usdt_icon.png") },
        { name: "BUSD", icon: require("@/assets/img/pi2p_busd_icon.webp") },
      ],
      displayKey: [
        "totalCancelled",
        "totalCancelledAmount",
        "totalCompleted",
        "totalCompletedAmount",
        "totalDeclined",
        "totalDeclinedAmount",
        "totalPending",
        "totalPendingAmount",
      ],
    };
  },
  methods: {
    ...mapActions("dashboard", ["list"]),

    getPercentage(value1, value2) {
      let perc = (value1 / value2) * 100;
      return perc;
    },

    filterData(value) {
      return pick(value, this.displayKey);
    },
  },
  beforeMount() {
    this.list();
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    ...mapState("dashboard", {
      data: (state) => state.dataSet,
    }),
    ngnTransactions() {
      let ngn_transactions = [
        {
          id: 1,
          name: "Pending",
          count: this.ngn_transactions.totalPending,
          amount: this.ngn_transactions.totalPendingAmount,
        },
        {
          id: 2,
          name: "Completed",
          count: this.ngn_transactions.totalCompleted,
          amount: this.ngn_transactions.totalCompletedAmount,
        },
        {
          id: 3,
          name: "Declined",
          count: this.ngn_transactions.totalDeclined,
          amount: this.ngn_transactions.totalDeclinedAmount,
        },
        {
          id: 4,
          name: "Cancelled",
          count: this.ngn_transactions.totalCancelled,
          amount: this.ngn_transactions.totalCancelledAmount,
        },
      ];
      return ngn_transactions;
    },
    piTransactions() {
      let pi_transactions = [
        {
          id: 1,
          name: "Pending",
          count: this.pi_transactions.totalPending,
          amount: this.pi_transactions.totalPendingAmount,
        },
        {
          id: 2,
          name: "Completed",
          count: this.pi_transactions.totalCompleted,
          amount: this.pi_transactions.totalCompletedAmount,
        },
        {
          id: 3,
          name: "Declined",
          count: this.pi_transactions.totalDeclined,
          amount: this.pi_transactions.totalDeclinedAmount,
        },
        {
          id: 4,
          name: "Cancelled",
          count: this.pi_transactions.totalCancelled,
          amount: this.pi_transactions.totalCancelledAmount,
        },
      ];
      return pi_transactions;
    },
    ngnPayments() {
      let ngn_payments = [
        {
          id: 1,
          name: "Pending",
          count: this.ngn_payments.totalPending,
          amount: this.ngn_payments.totalPendingAmount,
        },
        {
          id: 2,
          name: "Completed",
          count: this.ngn_payments.totalCompleted,
          amount: this.ngn_payments.totalCompletedAmount,
        },
        {
          id: 3,
          name: "Declined",
          count: this.ngn_payments.totalDeclined,
          amount: this.ngn_payments.totalDeclinedAmount,
        },
        {
          id: 4,
          name: "Cancelled",
          count: this.ngn_payments.totalCancelled,
          amount: this.ngn_payments.totalCancelledAmount,
        },
      ];
      return ngn_payments;
    },
    piPayments() {
      let pi_payments = [
        {
          id: 1,
          name: "Pending",
          count: this.pi_payments.totalPending,
          amount: this.pi_payments.totalPendingAmount,
        },
        {
          id: 2,
          name: "Completed",
          count: this.pi_payments.totalCompleted,
          amount: this.pi_payments.totalCompletedAmount,
        },
        {
          id: 3,
          name: "Declined",
          count: this.pi_payments.totalDeclined,
          amount: this.pi_payments.totalDeclinedAmount,
        },
        {
          id: 4,
          name: "Cancelled",
          count: this.pi_payments.totalCancelled,
          amount: this.pi_payments.totalCancelledAmount,
        },
      ];
      return pi_payments;
    },
  },
};
</script>

<style></style>
