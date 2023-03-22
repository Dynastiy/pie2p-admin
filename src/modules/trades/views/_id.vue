<template>
  <div class="details-page" v-loading="loading">
    <div class="details-top">
      <div class="spacer">
        <span class="" role="button" @click="$router.go(-1)">
          <i-icon icon="bx:arrow-back" width="25px" />
        </span>
        <div class="d-flex justify-content-between align-items-center">
          <h4 class="font-weight-bold mt-3">
            Trade <span class="text-uppercase">#{{ createRef(data.id) }}</span>
          </h4>
          <div v-if="data.status === 'open'">
            <button class="outline-btn" @click="closeTradeID">
              Close Trade
            </button>
          </div>
        </div>
        <div class="d-flex align-items-center mt-3" style="gap: 20px">
          <div>
            <span class="font-weight-light">Amount: </span>
            <span>{{ data.currency.symbol + data.amount }}</span>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div>
            <span class="font-weight-light">Date Created:</span>
            <span> {{ timeStamp(data.createdAt) }}</span>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div>
            <span class="status" :class="data.status">{{ data.status }}</span>
          </div>
        </div>
      </div>
      <div class="options spacer py-0">
        <span
          class="option-item"
          :class="{ 'active-item': activeEl === '1' }"
          @click="switchOption('1')"
          role="button"
          >Overview</span
        >
        <span
          class="option-item"
          :class="{ 'active-item': activeEl === '2' }"
          role="button"
          @click="switchOption('2')"
          >Orders</span
        >
      </div>
    </div>

    <div class="spacer">
      <trade-overview v-if="activeEl === '1'" />
      <trade-orders v-if="activeEl === '2'" />
    </div>
  </div>
</template>

<script>
import { createRef, timeStamp } from "@/plugins/filters";
import TradeOrders from "../components/TradeOrders.vue";
import TradeOverview from "../components/TradeOverview.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { TradeOrders, TradeOverview },
  data() {
    return {
      activeEl: "1",
      id: this.$route.params.id,
      createRef,
      timeStamp,
    };
  },
  methods: {
    ...mapActions("trades", ["view", "tradeOrders", "closeTrade"]),
    switchOption(value) {
      this.activeEl = value;
      if (value === "2") {
        this.tradeOrders(this.id);
      }
    },
    closeTradeID() {
      this.closeTrade(this.id);
    },
  },
  beforeMount() {
    this.view(this.id);
  },
  computed: {
    ...mapState("trades", {
      loading: (state) => state.loading,
      data: (state) => state.singleDataSet,
    }),
  },
};
</script>

<style></style>
