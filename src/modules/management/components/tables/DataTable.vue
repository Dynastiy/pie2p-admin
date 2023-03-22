<template>
  <!-- Table Content  -->
  <div class="" v-loading="loading">
    <div class="table-responsive">
      <table class="table table-centered table-nowrap mb-0">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              Full Name
              <span role="button">
                <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
              </span>
            </th>
            <th scope="col">
              User ID
              <span role="button">
                <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
              </span>
            </th>
            <th scope="col">
              User Email
              <span role="button">
                <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
              </span>
            </th>
            <th scope="col">
              Registration Date
              <span role="button">
                <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
              </span>
            </th>
            <th scope="col">
              User Category
              <span role="button">
                <i-icon icon="bi:arrow-down-up" class="ml-1" width="15px" />
              </span>
            </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in dataSet" :key="index">
            <td>{{ "#" + (index + 1) }}</td>
            <td class="text-capitalize">{{ item.name }}</td>
            <td>{{ item._id }}</td>
            <td>{{ item.email }}</td>
            <td>{{ timeStamp(item.createdAt) }}</td>
            <td>
              <span :class="item.roles.length === 0 ? '' : 'event-name-tag'">{{
                item.roles.length === 0 ? "No Data" : item.roles.join(", ")
              }}</span>
            </td>
            <td>
              <div class="d-flex align-items-center" style="gap: 25px">
                <span class="edit" role="button" @click="editUser(item)">
                  <i-icon icon="uil:edit" />
                </span>
                <span class="delete" role="button">
                  <i-icon icon="fluent:delete-12-regular" />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Edit User/Admin -->
    <div>
      <EditUser v-if="singleSuccess" @close="closeModal" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { timeStamp } from "@/plugins/filters";
import EditUser from "../modals/EditUser.vue";
export default {
  components: { EditUser },
  data: () => {
    return {
      timeStamp,
      EditUser: false,
    };
  },
  methods: {
    ...mapActions("management", ["profile"]),
    editUser(item) {
      this.EditUser = true;
      let payload = {
        role: "user",
        data: {
          adminId: this.user.id,
          traineeId: item._id,
        },
      };
      this.profile(payload);
    },
    closeModal() {
      this.$store.commit("management/REMOVE_SINGLE_DATA");
      //   this.EditUser = false;
    },
  },
  computed: {
    ...mapState("management", {
      dataSet: (state) => state.dataSet,
      loading: (state) => state.loading,
      singleSuccess: (state) => state.singleSuccess,
    }),
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>

<style></style>
