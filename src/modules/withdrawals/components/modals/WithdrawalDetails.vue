<template>
    <div class="transaction-details">
      <div v-if="loading" class="text-center">
        <i-icon icon="eos-icons:bubble-loading" />
      </div>
      <div v-else>
        <h6 class="" style="font-weight: 400">
          Withdrawal
          <span class="text-uppercase"> {{ "#" + createRef(item.id) }}</span>
        </h6>
  
        <div class="d-flex align-items-center mt-3 align-items-center">
          <div class="w-100">
            <h6 class="details-header">Status</h6>
            <span class="status" :class="item.status">{{ item.status }}</span>
          </div>
          <div class="w-100">
            <h6 class="details-header">Payment Type</h6>
            <span class="type">{{ item.paymentType }}</span>
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
            <h6 class="details-header">Total Amount</h6>
            <p class="details-body">
              {{ item.currency.symbol + Number(item.amount).toLocaleString() }}
            </p>
          </div>
          <div class="w-100">
            <h6 class="details-header">User</h6>
            <div class="d-flex" style="gap: 10px">
              <img
                src="@/assets/img/no-user.png"
                style="width: 40px; height: 40px; object-fit: cover;
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
                <p class="details-body">
                  {{ item.user.email }}
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <hr />
        <div>
          <h6 class="details-header">Payment Details</h6>
          <div class="payment-details">
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
                  {{ Number(item.amount).toLocaleString() }}
                </p>
          </div>
          </div>
          </div>
          <hr>
          <div>
          <h6 class="details-header">Transaction Details</h6>
         <div v-if="item.transaction">
          <div>
            <h6 class="details-header">Amount</h6>
            <p class="details-body">
              {{ item.transaction.currency.symbol + Number(item.transaction.amount).toLocaleString() }}
              </p>
          </div>
          <div class="mt-4">
            <h6 class="details-header">Child Transaction</h6>
            <p class="details-body">
              {{ item.transaction.currency.symbol + Number(item.transaction.childTransaction.amount).toLocaleString() }}
              </p>
              <small>{{ item.transaction.childTransaction.description }}</small>
          </div>
         </div>
        </div>
        
        <div  v-if="item.status=== 'pending'">
          <hr />
          <div class="d-flex align-items-center justify-content-end mt-3" style="gap:20px" v-if="!confirmBox">
            <button class="primary-btn" @click="openConfirmBox">Confirm</button>
            <button class="danger-btn" @click="changeStatus('decline')">Decline</button>
          </div>
          <div v-if="confirmBox">
            <h6 class="details-header">Upload Payment Proof</h6>
            <input  type="file"
                    id="file-ip-1"
                   
                    @change="addProof($event)">
            <div class="d-flex align-items-center mt-3" style="gap:10px">
              <button class="primary-btn" @click="changeStatus('confirm')">Submit</button>
              <button class="outline-btn" @click="confirmBox = !confirmBox">Cancel</button>
            </div>
          </div>
          
        </div>
        </div>
        
        
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  import { createRef } from "@/plugins/filters";
  export default {
    data() {
      return {
        createRef,
        url: process.env.VUE_APP_API_URL,
        confirmBox: false,
        proof: null
      };
    },
    methods: {
      ...mapActions("withdrawals", ["updateStatus"]),
      changeStatus(value) {
        let formData = new FormData()
        formData.append("proof", this.proof)
        let payload = {
          id: this.item.id,
          operation: value,
          page: "1",
          formData: formData
        }
        // console.log(value);
        this.updateStatus(payload)
      },
      openConfirmBox(){
        this.confirmBox = !this.confirmBox
      },
      addProof () {
      const input = event.target
      this.proof = input.files[0]
      console.log(this.proof)
    },
    },
    beforeMount() {
      // this.view(this.id);
    },
    computed: {
      ...mapState("withdrawals", {
        item: (state) => state.singleDataSet,
        loading: (state) => state.loading,
      }),
    },
  };
  </script>
  
  <style></style>
  