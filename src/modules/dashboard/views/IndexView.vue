<template>
  <div id="dashboard">
    <h3 class="font-weight-bold spacer pb-0">{{ routeName }}</h3>

    <!-- Analytics Cards -->
    <div class="spacer analytics">
      <div class="extended-card transactions">
       <div class="d-flex align-items-center" style="gap:5px">
        <span class="card-icon c"><i-icon icon="uil:transaction" /></span>
        <h6>Transactions(NGN)</h6>
       </div>
       <div class="mt-3">
        <h6>Total Transactions</h6>
        <h1>{{ Number(data.transactions.NGN.totalAmount).toLocaleString() }} <span class="small" style="font-size: 15px;">{{ data.transactions.total  + " transactions"}}</span></h1>
       </div>
       <div class="color-tabs my-3">
            <div v-for="item in ngnTransactions"
                :class="item.name.charAt(0)"
                :key="item.id"
                class="color-tab"
                :style="{ width: `${item.count}` + '%' }">
            </div>
        </div>
        <div class="list-applicants">
            <div v-for="item in ngnTransactions" :key="item.id" class="applicant-type">
                <span class="icon-tab" :class="item.name.charAt(0)">{{ item.count }}</span>
                <h6>{{ item.name + ":" }} <span class="number">{{Number(item.amount).toLocaleString()}}</span></h6>
            </div>
        </div>
      </div>

      <div class="extended-card payments">
        <div class="d-flex align-items-center" style="gap:5px">
          <span class="card-icon w"><i-icon icon="uil:transaction" /></span>
          <h6>Transactions(PI)</h6>
        </div>
        <div class="mt-3">
        <h6>Total Transactions</h6>
        <h1>{{ Number(data.transactions.PI.totalAmount).toLocaleString() }} <span class="small" style="font-size: 15px;">{{ data.transactions.total  + " transactions"}}</span></h1>
       </div>
        <div class="color-tabs my-3">
            <div v-for="item in piTransactions"
                :class="item.name.charAt(0)"
                :key="item.id"
                class="color-tab"
                :style="{ width: `${item.count}` + '%' }">
            </div>
        </div>
        <div class="list-applicants">
            <div v-for="item in piTransactions" :key="item.id" class="applicant-type">
                <span class="icon-tab" :class="item.name.charAt(0)">{{ item.count }}</span>
                <h6>{{ item.name + ":" }} <span class="number">{{Number(item.amount).toLocaleString()}}</span></h6>
            </div>
        </div>
      </div>

      <div class="data-card">
        
        <div>
          <h6>Open Trades</h6>
        <h1>{{ data.trades.totalOpen }}</h1>
        </div>
        <span class="card-icon o"><i-icon icon="icons8:buy" /></span>
      </div>

      <div class="data-card">
        
       <div>
        <h6>Closed Trades</h6>
        <h1>{{ data.trades.totalClosed }}</h1>
       </div>
        <span class="card-icon t"><i-icon icon="game-icons:sell-card" /></span>
      </div>

      <div class="data-card">
       
        <div>
          <h6>All Customers</h6>
          <h1>{{ data.users.totalUsers }}</h1>
        </div>
        <span class="card-icon j"> <i-icon icon="solar:user-linear"/></span>
      </div>

      <div class="data-card">
        <div>
          <h6>All Admins</h6>
          <h1>{{ data.users.totalAdmins }}</h1>
        </div>
        <span class="card-icon a"><i-icon icon="clarity:administrator-line" /></span>
      </div>

      <div class="extended-card transactions">
        <div class="d-flex align-items-center" style="gap:5px">
        <span class="card-icon t"><i-icon icon="streamline:money-cash-bag-dollar-bag-payment-cash-money-finance" /></span>
        <h6>Payments (NGN)</h6>
       </div>
       <!-- <div class="mt-3">
        <h6>Total Payments</h6>
        <h1>{{ Number(data.payments.NGN.totalAmount).toLocaleString() }} <span class="small" style="font-size: 15px;">{{ data.payments.total  + " payments"}}</span></h1>
       </div> -->
       <div class="color-tabs my-3">
            <div v-for="item in ngnPayments"
                :class="item.name.charAt(0)"
                :key="item.id"
                class="color-tab"
                :style="{ width: `${item.count}` + '%' }">
            </div>
        </div>
        <div class="list-applicants">
            <div v-for="item in ngnPayments" :key="item.id" class="applicant-type">
                <span class="icon-tab" :class="item.name.charAt(0)">{{ item.count }}</span>
                <h6>{{ item.name + ":" }} <span class="number">{{Number(item.amount).toLocaleString()}}</span></h6>
            </div>
        </div>
        
      </div>

      <div class="extended-card payments">
        <div class="d-flex align-items-center" style="gap:5px">
        <span class="card-icon p"> <i-icon icon="streamline:money-cash-bag-dollar-bag-payment-cash-money-finance" /></span>
        <h6>Payments (PI)</h6>
       </div>
       <!-- <div class="mt-3">
        <h6>Total Payments</h6>
        <h1>{{ Number(data.payments.NGN.totalAmount).toLocaleString() }} <span class="small" style="font-size: 15px;">{{ data.payments.total  + " transactions"}}</span></h1>
       </div> -->
       <div class="color-tabs my-3">
            <div v-for="item in piPayments"
                :class="item.name.charAt(0)"
                :key="item.id"
                class="color-tab"
                :style="{ width: `${item.count}` + '%' }">
            </div>
        </div>
        <div class="list-applicants">
            <div v-for="item in piPayments" :key="item.id" class="applicant-type">
                <span class="icon-tab" :class="item.name.charAt(0)">{{ item.count }}</span>
                <h6>{{ item.name + ":" }} <span class="number">{{Number(item.amount).toLocaleString()}}</span></h6>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      
    }
  },
  methods: {
    ...mapActions("dashboard", ["list"]),
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
      ngn_transactions: (state) => state.dataSet.transactions.NGN,
      pi_transactions: (state) => state.dataSet.transactions.PI,
      ngn_payments: (state) => state.dataSet.payments.NGN,
      pi_payments: (state) => state.dataSet.payments.PI
    }),
    ngnTransactions(){
      let ngn_transactions = [
        {
          id: 1,
          name: "Pending" ,
          count: this.ngn_transactions.totalPending,
          amount:  this.ngn_transactions.totalPendingAmount
        },
        {
          id: 2,
          name: "Completed" ,
          count: this.ngn_transactions.totalCompleted,
          amount:  this.ngn_transactions.totalCompletedAmount
        },
        {
          id: 3,
          name: "Declined" ,
          count: this.ngn_transactions.totalDeclined,
          amount:  this.ngn_transactions.totalDeclinedAmount
        },
        {
          id: 4,
          name: "Cancelled" ,
          count: this.ngn_transactions.totalCancelled,
          amount:  this.ngn_transactions.totalCancelledAmount
        },
      ]
      return ngn_transactions
    },
    piTransactions(){
      let pi_transactions = [
        {
          id: 1,
          name: "Pending" ,
          count: this.pi_transactions.totalPending,
          amount:  this.pi_transactions.totalPendingAmount
        },
        {
          id: 2,
          name: "Completed" ,
          count: this.pi_transactions.totalCompleted,
          amount:  this.pi_transactions.totalCompletedAmount
        },
        {
          id: 3,
          name: "Declined" ,
          count: this.pi_transactions.totalDeclined,
          amount:  this.pi_transactions.totalDeclinedAmount
        },
        {
          id: 4,
          name: "Cancelled" ,
          count: this.pi_transactions.totalCancelled,
          amount:  this.pi_transactions.totalCancelledAmount
        },
      ]
      return pi_transactions
    },
    ngnPayments(){
      let ngn_payments = [
        {
          id: 1,
          name: "Pending" ,
          count: this.ngn_payments.totalPending,
          amount:  this.ngn_payments.totalPendingAmount
        },
        {
          id: 2,
          name: "Completed" ,
          count: this.ngn_payments.totalCompleted,
          amount:  this.ngn_payments.totalCompletedAmount
        },
        {
          id: 3,
          name: "Declined" ,
          count: this.ngn_payments.totalDeclined,
          amount:  this.ngn_payments.totalDeclinedAmount
        },
        {
          id: 4,
          name: "Cancelled" ,
          count: this.ngn_payments.totalCancelled,
          amount:  this.ngn_payments.totalCancelledAmount
        },
      ]
      return ngn_payments
    },
    piPayments(){
      let pi_payments = [
        {
          id: 1,
          name: "Pending" ,
          count: this.pi_payments.totalPending,
          amount:  this.pi_payments.totalPendingAmount
        },
        {
          id: 2,
          name: "Completed" ,
          count: this.pi_payments.totalCompleted,
          amount:  this.pi_payments.totalCompletedAmount
        },
        {
          id: 3,
          name: "Declined" ,
          count: this.pi_payments.totalDeclined,
          amount:  this.pi_payments.totalDeclinedAmount
        },
        {
          id: 4,
          name: "Cancelled" ,
          count: this.pi_payments.totalCancelled,
          amount:  this.pi_payments.totalCancelledAmount
        },
      ]
      return pi_payments
    }
  },
};
</script>

<style></style>
