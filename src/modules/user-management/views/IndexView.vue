<template>
  <div class="">
    <h3 class="font-weight-bold spacer">{{ routeName }}</h3>
    <div class="spacer pt-0">
      <!-- <DataTable /> -->
      <table-component
        :items="dataSet"
        :currentPage="currentPage"
        :totalRecords="totalRecords"
        :perPage="perPage"
        :pages="pages"
        :busy="loading"
        @page-changed="getUsers"
        :fields="fields"
        :disableDeleteAction="true"
        :disableEditAction="true"
        @view="view"
      />
    </div>

    <!-- User Details  -->
    <view-user :user="user" @close="viewUser = !viewUser" v-if="viewUser" />
  </div>
</template>

<script>
// import DataTable from "../components/DataTable.vue";
import { mapActions, mapState } from "vuex";
import TableComponent from "@/components/TableComponent.vue";
import ViewUser from "@/components/modals/ViewUser.vue";
export default {
  components: { TableComponent, ViewUser },
  data: () => {
    return {
      fields: [
        {
          key: "userName",
          label: "Full Name",
        },
        {
          key: "email",
          label: "Email",
        },
        {
          key: "phoneNumber",
          label: "Phone Number",
          formatter:(val) => {
            return val || "---"
          }
        },
        {
          key: "userType",
          label: "User Type",
        },
        {
          key: "actions",
          label: "",
        },
      ],
      user: {},
      viewUser: false,
    };
  },
  methods: {
    ...mapActions("users", ["list"]),
    getUsers(e) {
      this.list(e);
    },

    view(e) {
      this.$axios
        .get(`admin/users/${e.id}`)
        .then((res) => {
          this.user = res.data;
          this.viewUser = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  beforeMount() {
    let page = 1;
    this.list(page);
  },

  computed: {
    routeName() {
      return this.$route.name;
    },
    ...mapState("users", {
      dataSet: (state) => state.dataSet,
      meta: (state) => state.metaSet,
      loading: (state) => state.loading,
      singleSuccess: (state) => state.singleSuccess,
    }),
    pages() {
      return Math.ceil(this.meta.total / this.meta.pageSize);
    },
    perPage() {
      return this.meta.pageSize;
    },
    currentPage() {
      return this.meta.currentPage;
    },
    totalRecords() {
      return this.meta.total;
    },
  },
};
</script>

<style></style>
