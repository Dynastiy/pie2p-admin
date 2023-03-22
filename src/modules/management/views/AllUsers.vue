<template>
  <div class="body">
    <div id="all-users" class="body-content">
      <div class="header-area spacer">
        <h5 class="w-100">All Users</h5>
        <!-- <div class="w-100">
          <div class="search-field w-100">
            <label class="mb-0" for="">Search</label>
            <div class="d-flex align-items-center" style="gap: 20px">
              <div class="search-area">
                <i-icon icon="carbon:search" class="search-icon" />
                <input
                  @keyup="searchData"
                  type="search"
                  name=""
                  id=""
                  v-model="userEmail"
                  placeholder="User Email"
                />
              </div>
              
            </div>
          </div>
        </div> -->
        <button class="primary-btn filter-button" @click="openFilter">
          filter
        </button>
      </div>
      <DataTable />
    </div>

    <div class="filter-container">
      <filter-data @close="closeFilter" />
    </div>
  </div>
</template>

<script>
import filterData from "../components/modals/filterData.vue";
import { mapActions, mapState } from "vuex";
import DataTable from "../components/tables/DataTable.vue";
export default {
  components: { filterData, DataTable },
  data: () => {
    return {
      userEmail: "",
    };
  },
  methods: {
    ...mapActions("management", ["list", "searchEmail"]),

    openFilter() {
      let filterContainer = document.querySelector(".filter-container");
      filterContainer.classList.add("display");
    },

    closeFilter() {
      let filterContainer = document.querySelector(".filter-container");
      filterContainer.classList.remove("display");
    },

    searchData() {
      let payload = {
        role: "user",
        data: {
          adminId: this.user.id,
          email: this.userEmail,
        },
      };
      this.searchEmail(payload);
    },
  },
  beforeMount() {
    let payload = {
      role: "user",
      page: "1",
      id: {
        adminId: this.user.id,
      },
    };
    this.list(payload);
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),
  },
};
</script>

<style></style>
