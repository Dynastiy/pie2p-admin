<template>
  <div class="">
    <h3 class="font-weight-bold spacer pb-0">{{ routeName }}</h3>
    <div class="spacer pt-0">
      <table-component
        :items="dataSet"
        :currentPage="currentPage"
        :totalRecords="totalRecords"
        :fields="fields"
        :perPage="perPage"
        :pages="pages"
        :busy="loading"
        @page-changed="getKYCS"
        :disableDeleteAction="true"
        :disableEditAction="true"
        @view="view"
      />
    </div>

    <ViewKYC :item="item" @close="close" v-if="viewKYC" />
  </div>
</template>

<script>
// import DataTable from "../components/tables/DataTable.vue";

import { mapActions, mapState } from "vuex";
import TableComponent from "@/components/TableComponent.vue";
import ViewKYC from "@/components/modals/ViewKYC.vue";
export default {
  components: { TableComponent, ViewKYC },
  data: () => {
    return {
      viewKYC: false,
      fields: [
        {
          key: "full_legal_name",
          label: "Full Name",
        },
        {
          key: "document_type",
          label: "Document Type",
        },
        {
          key: "createdAt",
          label: "Date Submitted",
        },
        {
          key: "status",
          label: "status",
        },
        {
          key: "actions",
          label: "",
        },
      ],
      item: {},
    };
  },
  methods: {
    ...mapActions("kyc", ["list"]),
    getKYCS(e) {
      this.list(e);
    },

    close() {
      this.viewKYC = !this.viewKYC
      let page = 1;
      this.list(page);
    },

    view(e) {
      this.$axios
        .get(`admin/kycs/${e.id}`)
        .then((res) => {
          console.log(res.data, "ommmo");
          this.item = res.data;
          this.viewKYC = true;
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
    ...mapState("kyc", {
      dataSet: (state) => state.dataSet,
      loading: (state) => state.loading,
      singleSuccess: (state) => state.singleSuccess,
      meta: (state) => state.metaSet,
    }),
    pages() {
      return Math.round(this.meta.total / this.meta.pageSize);
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
