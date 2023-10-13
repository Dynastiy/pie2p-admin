<template>
  <div class="">
    <h3 class="font-weight-bold spacer pb-0">{{ routeName }}</h3>
    <div class="spacer pt-0">
      <table-component
      :items="dataSet"
      :currentPage="currentPage"
      :totalRecords="totalRecords"
      :perPage="perPage"
      :fields="fields"
      :pages="pages"
      :busy="loading"
      @page-changed="getData"
      :disableDeleteAction="true"
      :disableEditAction="true"
      @view="view"
    />
    </div>
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { TableComponent },
  data: () => {
    return {
      fields:[
        {
          key: "fullName",
          label: "Full Name"
        },
        {
          key: "amount",
          label: "Amount",
          formatter: (val) => {
            return Number(val).toLocaleString()
          }
        },
        {
          key: "currency",
          label: "Currency",
          formatter: (val) => {
            return val.symbol
          }
        },
        {
          key: "createdAt",
          label: "Date"
        },
        {
          key: "Status",
          label: "status"
        },
        {
          key: "actions",
          label: ""
        }
      ]
    };
  },
  methods: {
    ...mapActions("withdrawals", ["list"]),

    view(e) {
      console.log(e);
    },

    getData(e) {
      this.list(e)
    }
  },
  beforeMount() {
    let page = 1
    this.list(page);
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    ...mapState("withdrawals", {
      dataSet: (state) => state.dataSet,
      loading: (state) => state.loading,
      singleSuccess: (state) => state.singleSuccess,
      meta: (state) => state.metaSet,
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
