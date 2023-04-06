<template>
    <!-- Table Content  -->
    <div class="" v-loading="loading">
      <div class="table-responsive">
        <table class="table table-centered table-nowrap mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Amount</th>
              <!-- <th scope="col">Channel</th> -->
              <th scope="col">Date</th>
              <!-- <th scope="col">Payment Type</th> -->
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in dataSet" :key="item.id">
              <td>{{ "#" + (index + 1) }}</td>
              <td class="text-capitalize">
                {{ item.user.firstName + " " + item.user.lastName }}
              </td>
              <td>{{ item.currency.symbol + Number(item.amount).toLocaleString() }}</td>
              <!-- <td
                class="text-capitalize"
                :class="{
                  'text-danger': item.channel === 'withdrawal',
                  'text-success': item.channel === 'deposit',
                }"
              >
                {{ item.channel }}
              </td> -->
              <td>{{ timeStamp(item.createdAt) }}</td>
              <!-- <td>
                <span class="type">{{ item.paymentType }}</span>
              </td> -->
              <td>
                <span class="status" :class="item.status">{{ item.status }}</span>
              </td>
              <td>
                <div class="d-flex align-items-center" style="gap: 15px">
                  <span class="view" role="button" @click="viewMore(item)">
                    <i-icon icon="ri:eye-line" />
                  </span>
                  <!-- <span class="edit" role="button">
                    <i-icon icon="uil:edit" />
                  </span> -->
                  <!-- <span class="delete" role="button">
                    <i-icon icon="fluent:delete-12-regular" />
                  </span> -->
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <AppPagination :meta="meta" @next="viewData()" />
        </div>
  
        <el-drawer
          title="Withdrawal Details"
          size="40%"
          :visible.sync="drawer"
          direction="rtl"
        >
          <hr class="mt-0" />
          <div class="spacer pt-0">
            <WithdrawalDetails/>
          </div>
        </el-drawer>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  import { timeStamp } from "@/plugins/filters";
  import AppPagination from "@/components/static/AppPagination.vue";
import WithdrawalDetails from '../modals/WithdrawalDetails.vue';
  export default {
    components: { AppPagination, WithdrawalDetails },
    data: () => {
      return {
        timeStamp,
        drawer: false,
      };
    },
    methods: {
      ...mapActions("withdrawals", ["list", "view"]),
      viewData(page = 1) {
        this.list(page);
      },
      viewMore(value) {
        this.view(value.id);
        console.log(value);
        this.drawer = true;
      },
    },
    computed: {
      ...mapState("withdrawals", {
        dataSet: (state) => state.dataSet,
        loading: (state) => state.loading,
        singleSuccess: (state) => state.singleSuccess,
        meta: (state) => state.metaSet,
      }),
    },
  };
  </script>
  
  <style></style>
  