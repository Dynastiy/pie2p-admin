<template>
  <!-- Table Content  -->
  <div class="">
    <div class="table-responsive">
      <table class="table table-centered table-nowrap mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Address</th>
            <!-- <th scope="col">Max. Amount</th> -->
            <th scope="col">Date</th>
            <!-- <th scope="col">Accepted Currency</th> -->
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <div>
          <span
            class="error-alert w-100 mt-3"
            v-if="!loading && dataSet === null"
            >{{
              error
                ? error
                : loading
                ? ""
                : dataSet === null
                ? "No data Found"
                : ""
            }}</span
          >
        </div>
        <tbody>
          <tr v-for="(item, index) in dataSet" :key="item.id">
            <td>{{ "#" + (index + 1) }}</td>
            <td class="text-capitalize">
              {{ item.user.firstName + " " + item.user.lastName }}
            </td>
            <td>{{ item.amount }}</td>
            <!-- <td>{{ item.channel }}</td> -->
            <td class="">{{ item.address }}</td>
            <!-- <td class="text-right">{{ item.maxAmount }}</td> -->
            <td>{{ timeStamp(item.createdAt) }}</td>
            <!-- <td>{{ item.acceptedCurrency.symbol }}</td> -->
            <td>
              <span class="status" :class="item.status">{{ item.status }}</span>
            </td>
            <td>
              <div
                class="d-flex align-items-center justify-content-center"
                style="gap: 15px"
              >
                <!-- <span class="view" role="button" @click="viewMore(item)">
                  <i-icon icon="ri:eye-line" />
                </span> -->
                <!-- <span class="edit" role="button">
                      <i-icon icon="uil:edit" />
                    </span> -->
                <span class="delete" role="button" @click="cancelOrderID(item)">
                  <i-icon icon="ic:outline-close" />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { timeStamp } from "@/plugins/filters";
export default {
  data: () => {
    return {
      timeStamp,
    };
  },
  methods: {
    ...mapActions("trades", ["cancelOrder"]),

    cancelOrderID(value) {
      let payload = {
        orderID: value.id,
        id: this.$route.params.id,
      };
      this.cancelOrder(payload);
    },
  },
  computed: {
    ...mapState("trades", {
      dataSet: (state) => state.orders,
      loading: (state) => state.loading,
      error: (state) => state.error,
    }),
  },
};
</script>

<style></style>
