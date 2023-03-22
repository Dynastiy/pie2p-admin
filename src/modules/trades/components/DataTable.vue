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
            <th scope="col">Min. Amount</th>
            <th scope="col">Max. Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Accepted Currency</th>
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
            <td>{{ item.currency.symbol + item.amount }}</td>
            <!-- <td>{{ item.channel }}</td> -->
            <td class="text-right">{{ item.minAmount }}</td>
            <td class="text-right">{{ item.maxAmount }}</td>
            <td>{{ timeStamp(item.createdAt) }}</td>
            <td>{{ item.acceptedCurrency.symbol }}</td>
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
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { timeStamp } from "@/plugins/filters";
export default {
  data: () => {
    return {
      timeStamp,
    };
  },
  methods: {
    // ...mapActions("trades", ["view"]),
    viewMore(value) {
      this.$router.push(`trade/${value.id}`);
      //   this.view(value);
    },
  },
  computed: {
    ...mapState("trades", {
      dataSet: (state) => state.dataSet,
      loading: (state) => state.loading,
      singleSuccess: (state) => state.singleSuccess,
    }),
  },
};
</script>

<style></style>
