<template>
  <!-- Table Content  -->
  <div class="" v-loading="loading">
    <div class="table-responsive">
      <table class="table table-centered table-nowrap mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">User Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataSet" :key="item.id">
            <td>{{ "#" + (index + 1) }}</td>
            <td class="text-capitalize">
              {{ item.firstName + " " + item.lastName }}
            </td>
            <td>{{ item.email }}</td>
            <td>{{ item.phoneNumber || "No data" }}</td>
            <!-- <td>{{ timeStamp(item.createdAt) }}</td> -->
            <td>
              <span class="type">{{ item.userType }}</span>
            </td>
            <!-- <td>
              <span class="status" :class="item.status">{{ item.status }}</span>
            </td> -->
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

    <!-- User Details  -->
    <userID v-if="singleSuccess"/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { timeStamp } from "@/plugins/filters";
import userID from './modals/userID.vue';
export default {
  components: { userID },
  data: () => {
    return {
      timeStamp,
      details: false
    };
  },
  methods: {
    ...mapActions("users", ["view"]),
    viewMore(value) {
      // this.$router.push(`users/${value.id}`);
        this.view(value.id);
      this.details = true
    },
    closeModal(){
      this.details = false
    }
  },
  computed: {
    ...mapState("users", {
      dataSet: (state) => state.dataSet,
      loading: (state) => state.loading,
      singleSuccess: (state) => state.singleSuccess,
    }),
  },
};
</script>

<style></style>
