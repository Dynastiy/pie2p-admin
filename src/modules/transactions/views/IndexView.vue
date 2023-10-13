<template>
  <div class="">
    <h3 class="font-weight-bold spacer pb-0">{{ routeName }}</h3>
    <div class="spacer pt-0">
      <TableComponent :items="items" :fields="fields" :busy="busy"/>
    </div>
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
// import DataTable from "../components/DataTable.vue";
import { mapActions } from "vuex";
export default {
  components: { TableComponent },
  data: () => {
    return {
      items: [],
      fields: [
        {
          key: "user",
          label: "Full Name",
          formatter: (val) => {
            return val.firstName + " " + val.firstName;
          },
        },

        {
          key: "amount",
          label: "Amount",
          formatter:(val) => {
            return val.toLocaleString()
          }
          // sortable: true,
        },

        {
          key: "currency",
          label: "Currency",
          formatter: (val) => {
            return val.name;
          },
        },

        {
          key: "channel",
          label: "Channel",

          // sortable: true
        },

        {
          key: "createdAt",
          label: "Date",
          // formatter: (val, key, item) => {
          //   return val.first_name + " " + val.first_name;
          // },
          // sortable: true,
        },

        {
          key: "transactionType",
          label: "Transaction Type",

          // sortable: true
        },

        {
          key: "status",
          label: "Status",

          // sortable: true
        },
      ],
      busy: false,
      meta: {}
    };
  },
  methods: {
    ...mapActions("transactions", ["list"]),
    getItems(page = 1) {
      this.busy = true
      this.list(page).then((res) => {
        console.log(res.data, "mmmm");
        this.items = res.data.data;
        this.meta = res.data.meta
        this.busy = false
      });
    },
  },
  beforeMount() {
    this.getItems();
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
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
