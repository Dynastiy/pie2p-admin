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
            <th scope="col">Channel</th>
            <th scope="col">Date</th>
            <th scope="col">Transaction Type</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <span class="text-danger" v-if="dataSet.length === 0" style="font-size: 14px"> 
                No Data here
            </span>
          <tr v-for="(item, index) in dataSet" :key="item.id">
            <td>{{ "#" + (index + 1) }}</td>
            <td class="text-capitalize">
              {{ item.user.firstName + " " + item.user.lastName }}
            </td>
            <td>{{ item.currency.symbol + Number(item.amount).toLocaleString() }}</td>
            <td
              class="text-capitalize"
              :class="{
                'text-danger': item.channel === 'withdrawal',
                'text-success': item.channel === 'deposit',
              }"
            >
              {{ item.channel }}
            </td>
            <td>{{ timeStamp(item.createdAt) }}</td>
            <td>
              <span class="type">{{ item.transactionType }}</span>
            </td>
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
        title="Transaction Details"
        size="40%"
        :visible.sync="drawer"
        direction="rtl"
      >
        <hr class="mt-0" />
        <div class="spacer pt-0">
          <TransactionDetails />
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { timeStamp } from "@/plugins/filters";
import AppPagination from "@/components/static/AppPagination.vue";
import TransactionDetails from "./TransactionDetails.vue";
export default {
  components: { AppPagination, TransactionDetails },
  data: () => {
    return {
      timeStamp,
      drawer: false,
    };
  },
  methods: {
    ...mapActions("transactions", ["list", "view"]),
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
    ...mapState("transactions", {
      dataSet: (state) => state.dataSet,
      loading: (state) => state.loading,
      singleSuccess: (state) => state.singleSuccess,
      meta: (state) => state.metaSet,
    }),
  },
};
</script>

<style></style>
